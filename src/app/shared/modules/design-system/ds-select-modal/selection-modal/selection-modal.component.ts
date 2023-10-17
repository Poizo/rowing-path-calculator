<DataType = any> {

    public readonly ButtonTypeEnum = ButtonTypeEnum;
    public readonly DS_ButtonTypeEnum = DS_ButtonTypeEnum;
    public readonly DS_button_icon_placement_Enum = DS_button_icon_placement_Enum;
    public readonly DS_IconsEnum = DS_IconsEnum;

    public dataSource: SelectionModalDataSource<DataType>;
    public pageSizeOptions: number[];
    public uid = ObjectHelper.generateUUIDv4();
    public textfieldId = ObjectHelper.generateUUIDv4();
    public columnsToDisplay: string[];


    @Output() noDataButtonClick = new EventEmitter<void>();

    constructor(
        public dialogRef: MatDialogRef<DS_SelectionModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ISelectionModalConfig,
        @Optional() @Inject(DS_CONFIG) globalConfig: DS_ConfigInterface
    ) {
        if (!globalConfig) {
            throw new Error('Cannot find `DS_CONFIG`. Please add `NgAfelioDsModule.forRoot(...)` into your AppModule.')
        }
        this.dataSource = new SelectionModalDataSource(data.dataGetter);
        this.dataSource.changeQuery(new DataQueryModel({
            ...this.dataSource.getInstantQuery(), order: new OrderModel({
                orderByPropertyName: data.mainColumn,
                orderByDescending: false
            })
        }));
        this.pageSizeOptions = [...globalConfig.basePageSizeOptions];

        this.columnsToDisplay = [...data.columns, 'select'];
    }

    public onButtonClicked(buttonType: ButtonTypeEnum) {
        if (buttonType === ButtonTypeEnum.ACTION) {
            this.dialogRef.close(this.data.selectedElements);
        } else {
            this.dialogRef.close();
        }
    }

    public removeItem(element: DataType): void {
        this.data.selectedElements = (this.data.selectedElements || []).filter(se => !this.data.dataCompare(se, element));
    }

    public addItem(element: DataType): void {
        this.data.selectedElements = [...(this.data.selectedElements || []), element];
    }

    public isItemSelected(element: DataType): boolean {
        if (!this.data.selectedElements) {
            return false;
        }
        return this.data.selectedElements.some(se => this.data.dataCompare(se, element));
    }

    public sortChange(sortState: Sort) {
        const currentQuery = this.dataSource.getInstantQuery();
        this.dataSource.changeQuery(new DataQueryModel({
            ...currentQuery,
            order: new OrderModel({
                orderByPropertyName: sortState.active,
                orderByDescending: sortState.direction === 'desc'
            }),
            pagination: new PageModel({ size: currentQuery.pagination!.size })
        }));
        console.log(this.dataSource.getInstantQuery());
    }

    public onPageChanged(event: PageEvent) {
        const currentQuery = this.dataSource.getInstantQuery();
        this.dataSource.changeQuery(new DataQueryModel({
            ...currentQuery,
            pagination: new PageModel({
                pageNumber: event.pageIndex,
                size: event.pageSize
            })
        }));
    }

    @Debounce()
    public filterChange(searchValue: string): void {
        const currentQuery = this.dataSource.getInstantQuery();

        let newFilter: SearchModel<string> | undefined;
        if (searchValue) {
            newFilter = {
                filters: [
                    {
                        filterId: 'search',
                        column: 'search',
                        type: 'text',
                        data: {
                            value: searchValue,
                            type: 'contains'
                        }
                    }
                ]
            };
        }

        this.dataSource.changeQuery(new DataQueryModel({
            ...currentQuery,
            filters: newFilter,
            pagination: new PageModel({ size: currentQuery.pagination!.size })
        }));
    }

    public toggleSelection(item: DataType, newValue?: boolean): void {
        if (this.isItemDisabled(item)) {
            return;
        }
        if (isNil(newValue)) {
            newValue = !this.isItemSelected(item);
        }
        if (newValue) {
            this.addItem(item);
        } else {
            this.removeItem(item);
        }
    }

    public isItemDisabled(item: DataType): boolean {
        return (!this.data.multiple && (this.data.selectedElements?.length || 0) > 0 && !this.isItemSelected(item) || !this.data.isEnabledGetter(item, this.data.selectedElements));
    }

    public noDataButtonClicked(): void {
        this.noDataButtonClick.emit();
    }

}
import { DataSource } from '@angular/cdk/table';
import { Component, EventEmitter, Inject, Optional, Output } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';
import { Sort } from '@angular/material/sort';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { isNil } from 'lodash';

import { Debounce } from '../../decorators/debounce.decorator';
import { DS_ButtonTypeEnum, DS_IconsEnum, DS_button_icon_placement_Enum } from '../../enums/public-api';
import { ObjectHelper } from '../../helpers/object.helper';
import { DataQueryModel, OrderModel, PageModel } from '../../models/public-api';
import { DS_CONFIG, DS_ConfigInterface } from '../../ng-afelio-ds.config';
import { ISelectModalLabels } from '../interfaces/select-modal-label.interfaces';
import { SearchModel } from '../../../advanced-search/public-api';

class SelectionModalDataSource<DataType = any> extends DataSource<DataType> {
    public query$ = new BehaviorSubject(new DataQueryModel());
    private _dataStream: Observable<DataType[]>;
    public pageResult$: Observable<PageModel>;

    constructor(dataGetter: (search?: DataQueryModel) => Observable<{ data: DataType[], pagination: PageModel }>) {
        super();
        const dataStream = this.query$.pipe(
            switchMap(query => dataGetter(query).pipe(
                catchError(() => of({
                    data: [],
                    pagination: new PageModel()
                }))
            )),
            shareReplay({ refCount: true, bufferSize: 1 })
        );
        this._dataStream = dataStream.pipe(map(d => d.data));
        this.pageResult$ = dataStream.pipe(map(d => d.pagination));
    }

    connect(): Observable<DataType[]> {
        return this._dataStream;
    }

    disconnect(): void {
        this.query$.complete();
    }

    public changeQuery(newQuery: DataQueryModel): void {
        this.query$.next(newQuery);
    }

    public getInstantQuery(): DataQueryModel {
        return this.query$.getValue();
    }

}

export interface ISelectionModalConfig<DataType = any> {
    labels: ISelectModalLabels;
    dataGetter: (search?: DataQueryModel) => Observable<{ data: DataType[], pagination: PageModel }>;
    labelGetter: (data: DataType, column: string) => string;
    selectedElements: DataType[];
    multiple: boolean;
    dataCompare: (data1: DataType, data2: DataType) => boolean;
    displayNoDataButton: boolean;
    columns: string[];
    mainColumn: string;
    isEnabledGetter: (data: DataType, selectedElements: DataType[]) => boolean;
}

enum ButtonTypeEnum {
    CANCEL = 'CANCEL',
    ACTION = 'ACTION'
}

@Component({
    selector: 'app-selection-modal',
    templateUrl: './selection-modal.component.html',
    styleUrls: ['./selection-modal.component.scss']
})
export class DS_SelectionModalComponent