ssor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { BehaviorSubject, Observable, take, takeUntil } from 'rxjs';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isEqual } from 'lodash';

import { DS_ButtonTypeEnum, DS_IconsEnum, DS_button_icon_placement_Enum } from '../enums/public-api';
import { DS_LabelWithParam } from '../interfaces';
import { DataQueryModel, PageModel } from '../models/public-api';
import { ISelectModalLabels } from './interfaces/select-modal-label.interfaces';
import { DS_SelectionModalComponent, ISelectionModalConfig } from './selection-modal/selection-modal.component';

@UntilDestroy()
@Component({
    selector: 'ds-select-modal',
    templateUrl: './select-modal.component.html',
    styleUrls: ['./select-modal.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DS_SelectModalComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DS_SelectModalComponent<DataType = any> implements ControlValueAccessor {

    public readonly DS_ButtonTypeEnum = DS_ButtonTypeEnum;
    public readonly DS_IconsEnum = DS_IconsEnum;
    public readonly DS_button_icon_placement_Enum = DS_button_icon_placement_Enum;

    /**
     * Button label
     */
    @Input()
    public label!: DS_LabelWithParam;

    /**
     * Modal labels
     */
    @Input()
    public modalLabels!: ISelectModalLabels;

    /**
     * Will only display value if mark as readOnly
     */
    @Input()
    public readOnly = false;

    /**
     * Allow to select multiple value
     */
    @Input()
    public multiple = true;

    /**
     * Will be called to get data giving search text
     */
    @Input() dataGetter!: (search?: DataQueryModel) => Observable<{ data: DataType[], pagination: PageModel }>;

    /**
     * List of column names you want to display.
     */
    @Input() columns = ['label'];
    @Input() mainColumn = 'label';
    @Input() labelGetter = (data: DataType, column: string) => (data as any)[this.mainColumn];
    @Input() isEnabledGetter = (data: DataType, selectedElements: DataType[]) => true;
    @Input() dataCompare = (data1: DataType, data2: DataType) => isEqual(data1, data2);
    @Input() displayNoDataButton = false;
    @Input() closeModalOnNoDataButtonClicked = true;
    @Input() itemsClickabled = false;

    @Output() noDataButtonClick = new EventEmitter<void>();
    @Output() itemClick = new EventEmitter<DataType>()

    public data = new BehaviorSubject<DataType[]>([]);
    public disabled$ = new BehaviorSubject<boolean>(false);

    constructor(private dialog: MatDialog) { }

    /**
     *
     * @internal
     */
    public onChange = (_data: DataType[]) => { };
    /**
     *
     * @internal
     */
    public onTouched = () => { };

    writeValue(obj: DataType[]): void {
        this.data.next(obj);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled$.next(isDisabled);
    }

    private updateData(obj: DataType[]): void {
        this.data.next(obj);
        this.onChange(obj);
    }

    public openSelectionModal(): void {
        if (this.readOnly || this.disabled$.getValue()) {
            return;
        }
        const modalRef: MatDialogRef<DS_SelectionModalComponent<DataType>, DataType[]> = this.dialog.open(DS_SelectionModalComponent, {
            data: {
                labels: this.modalLabels,
                dataGetter: this.dataGetter,
                labelGetter: this.labelGetter,
                selectedElements: this.data.getValue(),
                multiple: this.multiple,
                dataCompare: this.dataCompare,
                displayNoDataButton: this.displayNoDataButton,
                columns: this.columns,
                mainColumn: this.mainColumn,
                isEnabledGetter: this.isEnabledGetter
            } as ISelectionModalConfig<DataType>
        });

        modalRef.componentInstance.noDataButtonClick.pipe(
            takeUntil(modalRef.afterClosed()),
            take(1),
            untilDestroyed(this)
        ).subscribe(() => {
            this.noDataButtonClick.emit();
            if (this.closeModalOnNoDataButtonClicked) {
                modalRef.close();
            }
        });

        modalRef.afterClosed().pipe(
            take(1),
            untilDestroyed(this)
        ).subscribe((newValue?: DataType[]) => {
            if (newValue) {
                this.updateData(newValue);
            }
            this.onTouched();
        });
    }

    public chipsClicked(item: DataType): void {
        if (this.readOnly) {
            this.itemClick.emit(item);
        } else {
            this.openSelectionModal();
        }
    }

}
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAcce