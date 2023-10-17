import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnChanges, OnDestroy, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';
import { ArrayHelper } from '../helpers/public-api';
import { DS_IconsEnum } from './../enums/ds-icons.enum';
import { TABLE_LIST_CONFIG, TableListColumnConfig, TableListConfig, pageSortEventInterface } from './ds-table-list-config';

export interface DsTableListColumnsState {
    /**
     * Column identifier
     */
    column: string;
    /**
     * Is the column displayed or is it hide?
     */
    isDisplayed: boolean;
    /**
     * Is the column pinned?
     */
    isPinned: boolean;
};

/**
 * DsTableListComponent is an wrapper of MatTable, a table component from @angular/material.
 * This component can work only on clientside or it can work  with serverside.
 *
 * All you need is to give a proper configuration to the component.
 * Note that a default configuration exist and can be override in the forRoot() method of the DsTableListModule.
 */
@UntilDestroy()
@Component({
    selector: 'ds-table-list',
    templateUrl: './ds-table-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsTableListComponent implements OnChanges, AfterViewInit, OnDestroy {

    /**
     * The object containing the data et the configuration of the array/list
     * @required
     * @type {TableListConfig}
     * @memberof DsTableListComponent
     */
    @Input() public config!: TableListConfig;

    /**
     * Array reprensenting column order et if they're pinned and displayed or not
     *
     * @type {DsTableListColumnsState[]}
     * @memberof DsTableListComponent
     */
    @Input() public columnsState?: DsTableListColumnsState[];

    public datasource$ = new BehaviorSubject<MatTableDataSource<unknown>>(new MatTableDataSource());

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sortheader!: MatSort;

    /**
     * Emitter that emit when sorting is clicked, only if the property `sortEmitter` is passed to true in the configuration object
     *
     * @memberof DsTableListComponent
     */
    @Output() public sortChange = new EventEmitter<Sort>();

    /**
     * Emitter that emit when paginator's paging is clicked, only if the property `pageEmitter` is passed to true in the configuration object
     *
     * @memberof DsTableListComponent
     */
    @Output() public pageChange = new EventEmitter<PageEvent>();

    /**
     * Emitter that emit columns displayed state
     * Value emitted is an array of object that are in the current displayed order and containing the name and the fact that the column is isdisplayed or not
     *
     * @memberof DsTableListComponent
     */
    @Output() public columnsStateChange = new EventEmitter<DsTableListColumnsState[]>();

    public displayedColumns:  string[] = [];
    public hiddenColumn = new Set<string>();
    public columnActionPanelForm!: FormGroup<{[key: string]: FormControl<boolean | null>}>;
    private formDestroyer$ = new Subject();
    public columnsActionPanelShowed = false;

    public readonly DS_IconsEnum = DS_IconsEnum;

    constructor(@Inject(TABLE_LIST_CONFIG) public defaultConfig: TableListConfig, private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges): void {
            this.config = {
                ...this.defaultConfig,
                ...this.config,
                pagination: { ...this.defaultConfig.pagination, ...this.config.pagination }
            };

            if (changes['config'] && (changes['config'].firstChange || changes['config'].currentValue.columns !== changes['config'].previousValue.columns) && this.config.columns
                || changes['columnsState'] && changes['columnsState'].currentValue !== changes['columnsState'].previousValue
            ) {
                this.manageColumnState();
                this.buildColumnActionPanelForm();
                this.listenColumnActionPanelForm();
                this.config.columns?.forEach(column => {
                    if (column.isPinned) {
                        // trick: reverse it 'cause it'll be reverse by the toggle method
                        column.isPinned = !column.isPinned;
                        this.togglePinnedColumn(new Event(''), column);
                    }
                });
            }

            if (Array.isArray(this.config.datasource)) {
                const newDatasource = new MatTableDataSource(this.config.datasource);
                if (this.paginator) {
                    this.paginator.length = this.config!.pagination!.length;
                    this.paginator.pageIndex = this.config!.pagination!.pageIndex;
                    if (!this.config.serverSideDatasourceCallback) {
                        newDatasource.paginator = this.paginator;
                    }
                }
                this.datasource$.next(newDatasource);
            }
    }

    ngAfterViewInit() {
        const newDatasource = this.datasource$.getValue();
        newDatasource.paginator = this.paginator;
        this.datasource$.next(newDatasource);
    }

    ngOnDestroy(): void {
        this.formDestroyer$.next(null);
        this.formDestroyer$.complete();
    }

    public togglePinnedColumn(e: Event, column: TableListColumnConfig) {
        e.preventDefault();
        e.stopPropagation();

        const columnPinned = this.config.columns!.find(col => col.columnDef === column.columnDef);
        columnPinned!.isPinned = !column.isPinned;
        let dropIndexes: {currentIndex: number, previousIndex: number};
        const previousIndex = this.displayedColumns?.findIndex(col => col === column.columnDef);
        if (columnPinned!.isPinned) {
            dropIndexes = {currentIndex: 0, previousIndex };
            this.columnActionPanelForm.controls[column.columnDef].disable({emitEvent: false});
        } else {
            dropIndexes = {currentIndex: this.config.columns?.filter(col => col.isPinned).length! , previousIndex};
            this.columnActionPanelForm.controls[column.columnDef].enable({emitEvent: false});
        }
        this.dropColumn(dropIndexes, true);

        this.setFixedColumnLeftStyle();
    }

    private setFixedColumnLeftStyle() {
        const pinnedTh = Array.from(document.querySelectorAll('[data-pinned-column-th][data-pinned-column]')).filter(th => th.getAttribute('data-pinned-column') !== 'non-pinned' );
        pinnedTh.forEach((th, index) => {
            if (index > 0) {
                Array.from(document.querySelectorAll(`[data-pinned-column="${index}"]`)).forEach(cell => {
                    let leftValue: number = 0;
                    for (let i = index; i > 0; i--) {
                        leftValue += pinnedTh[i - 1].clientWidth;
                    }
                    (cell as HTMLElement).style.left = `${leftValue}px`;
                });
            }
        });
    }

    public toggleColumnsActionPanel(show: boolean): void {
        this.columnsActionPanelShowed = show;
    }

    public dropColumn(event: {currentIndex: number, previousIndex: number}, forceDrag = false) {
        // Check if there's a nondragable between previous and current index
        const smallerIndex: number = event.currentIndex < event.previousIndex ? event.currentIndex : event.previousIndex;
        const biggerIndex: number = smallerIndex === event.currentIndex ? event.previousIndex : event.currentIndex;
        const couldDragColumn: boolean = !this.config.columns?.slice(smallerIndex, biggerIndex + 1).some(column => column.isDisabledReorderable || column.isPinned || column.isPinnedRight);

        if (forceDrag || (couldDragColumn && !this.isColumnDragDisabled(this.displayedColumns![event.previousIndex]))) {
            // If there's no undraggable column in the way we change the displayed columns

            const newColumns = ArrayHelper.insert(
                                this.config.columns!.filter((value, index) => index !== event.previousIndex),
                                event.currentIndex,
                                this.config.columns![event.previousIndex]
                                );

            this.config.columns = [...newColumns];

            const newDisplayedColumns = ArrayHelper.insert(
                                this.displayedColumns!.filter((value, index) => index !== event.previousIndex),
                                event.currentIndex,
                                this.displayedColumns![event.previousIndex]
                                );

            this.displayedColumns = [...newDisplayedColumns];

            this.emitColumnsStateChange();
        }
    }

    private manageColumnState() {
        if (this.columnsState && this.columnsState.length > 0) {
            this.columnsState.forEach(columnState => {
                let indexOfColumnToUpdate = (this.config.columns || []).findIndex(column => column.columnDef === columnState.column);
                if (indexOfColumnToUpdate) {
                    this.config.columns![indexOfColumnToUpdate].isPinned = columnState.isPinned
                    this.config.columns![indexOfColumnToUpdate].isNotDisplayed = !columnState.isDisplayed
                }
            });
        }

        this.hiddenColumn.clear();
        this.config.columns?.forEach(column => {
            if (column.isNotDisplayed) {
                this.hiddenColumn.add(column.columnDef);
            }
        });
        ArrayHelper.insert((this.config.columns || []).filter(col => !col.isPinned), 0, (this.config.columns || []).filter(col => col.isPinned));
        this.displayedColumns = (this.config.columns || []).map(col => col.columnDef);
    }

    public sortingChange(sort: Sort) {
        if (this.config.sortEmitter) {
            this.sortChange.emit(sort);
        }
        this.serverSideDatasource();
    }

    public pagingChange(page: PageEvent) {
        if (this.config.pageEmitter) {
            this.pageChange.emit(page);
        }
        this.serverSideDatasource();
    }

    private serverSideDatasource() {
        if (!!this.config.serverSideDatasourceCallback) {
            let pageSort: pageSortEventInterface = {
                page: {
                    length: this.paginator.length,
                    pageIndex: this.paginator.pageIndex,
                    pageSize: this.paginator.pageSize,
                }
            };
            if (this.config.isTableSortable && this.sortheader) {
                pageSort.sort = {
                    active: this.sortheader.active,
                    direction: this.sortheader.direction
                }
            }

            this.config.serverSideDatasourceCallback(pageSort).pipe(take(1)).subscribe(paginatedData => {
                const newDatasource = new MatTableDataSource(paginatedData.datasource);
                this.paginator.length = paginatedData.pagination.length;
                this.paginator.pageIndex = paginatedData.pagination.pageIndex;

                this.datasource$.next(newDatasource);
            });
        }
    }

    private buildColumnActionPanelForm() {
        this.columnActionPanelForm = new FormGroup<{[key: string]: FormControl<boolean | null>}>({});
        this.displayedColumns?.forEach(column => {
            const control = new FormControl<boolean | null>(!this.config.columns!.find(col => col.columnDef === column)?.isNotDisplayed);
            this.config.columns!.find(col => col.columnDef === column)?.isPinned ? control.disable() : control.enable();
            this.columnActionPanelForm.addControl(column, control);
        });
    }

    private listenColumnActionPanelForm() {
        this.formDestroyer$.next(null);
        this.columnActionPanelForm.valueChanges.pipe(untilDestroyed(this), takeUntil(this.formDestroyer$)).subscribe(value => {
            Object.keys(value).forEach(columnKey => {
                if (value[columnKey]) {
                    this.hiddenColumn.delete(columnKey);
                } else {
                    this.hiddenColumn.add(columnKey);
                }
            });
            this.emitColumnsStateChange();
        });
    }

    public isColumnDragDisabled(column: string): boolean {
        const columnDragged = this.config.columns?.find(col => col.columnDef === column);
        return !!(columnDragged && (columnDragged.isDisabledReorderable || columnDragged.isPinned || columnDragged.isPinnedRight));
    }

    public isColumnPinned(column: string) {
        return !!this.config.columns?.find(col => col.columnDef === column)?.isPinned;
    }

    private emitColumnsStateChange() {
        const columnsSate: DsTableListColumnsState[] = this.config.columns!.map(col => {
            return {
                column: col.columnDef,
                isDisplayed: !this.hiddenColumn.has(col.columnDef),
                isPinned: !!col.isPinned
            };
        });
        this.columnsStateChange.emit(columnsSate);
    }
}
