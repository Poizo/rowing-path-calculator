omponent, ContentChild, forwardRef, Input, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { DS_ButtonTypeEnum, DS_IconsEnum, DS_button_icon_placement_Enum } from '../enums/public-api';
import { DS_LabelWithParam } from '../interfaces';
import { FormTouchNotifier } from '../services/public-api';

@UntilDestroy()
@Component({
    selector: 'ds-repeat',
    templateUrl: './repeat.component.html',
    styleUrls: ['./repeat.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DS_RepeatComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DS_RepeatComponent),
            multi: true
        },
        FormTouchNotifier
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DS_RepeatComponent implements OnInit, AfterContentInit, ControlValueAccessor, Validator {

    public readonly DS_ButtonTypeEnum = DS_ButtonTypeEnum;
    public readonly DS_IconsEnum = DS_IconsEnum;
    public readonly DS_button_icon_placement_Enum = DS_button_icon_placement_Enum;

    @ContentChild(TemplateRef) controlTemplate?: TemplateRef<any>;
    @Input() controlValidators?: ValidatorFn[]import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, C;
    @Input() arrayValidators?: ValidatorFn[];
    @Input() readOnly = false;
    @Input() min = 0;
    @Input() max = 0;
    @Input() addButtonLabel: DS_LabelWithParam = { label: 'COMMON.ADD' }

    public formArray: FormArray<any>;

    constructor(private touchNotifier: FormTouchNotifier, private cdr: ChangeDetectorRef) {
        this.formArray = this.buildForm();
    }

    ngOnInit() {
        if (this.arrayValidators) {
            this.formArray.addValidators(this.arrayValidators);
        }
        this.formArray.valueChanges.pipe(
            untilDestroyed(this)
        ).subscribe({
            next: (value) => {
                this.onTouched();
                this.onChange(value);
            }
        });
    }

    ngAfterContentInit(): void {
        this.touchNotifier.init(this.formArray);
    }

    /**
     *
     * @internal
     */
    public onChange = (_data: any[]) => { };
    /**
     *
     * @internal
     */
    public onTouched = () => { };

    writeValue(obj: any[]): void {
        if (obj && !Array.isArray(obj)) {
            throw new Error('Repeated data must be an array');
        }
        this.fillForm(obj);
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled: boolean): void {
        if (isDisabled && this.formArray.enabled) {
            this.formArray.disable();
        } else if (!isDisabled && this.formArray.disabled) {
            this.formArray.enable();
        }
    }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        let errors: ValidationErrors | null = null;
        if (!this.formArray.valid) {
            if (this.formArray.errors) {
                errors = { ...this.formArray.errors };
            } else {
                errors = {};
            }
            this.formArray.controls.forEach((control, index) => {
                if (!errors!['controls']) {
                    errors!['controls'] = {};
                }
                if (control.errors) {
                    errors!['controls'][index] = {
                        ...control.errors
                    }
                }
            });
        }
        return errors;
    }

    public buildForm(): FormArray<any> {
        return new FormArray<any>([]);
    }

    public fillForm(values?: any[]): void {
        this.formArray.clear({ emitEvent: false });
        if (values) {
            values.forEach(item => {
                this.formArray.push(this.buildControl(item));
            });
            if (this.min > 0 && values.length < this.min) {
                for (let index = 0; index < (this.min - values.length); index++) {
                    this.formArray.push(this.buildControl());
                }
            }
        }
        this.cdr.markForCheck();
    }

    public addItem(value?: any): void {
        if (this.formArray.valid) {
            this.formArray.push(this.buildControl(value ?? null));
        }
    }

    public removeItem(index: number): void {
        this.formArray.removeAt(index);
    }

    private buildControl(value?: any): FormControl<any> {
        const newControl = new FormControl(value ?? null);
        if (this.controlValidators) {
            newControl.addValidators(this.controlValidators);
            newControl.updateValueAndValidity();
        }
        return newControl;
    }

}
