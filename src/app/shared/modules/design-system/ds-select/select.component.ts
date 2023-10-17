import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, Input, OnInit, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, UntypedFormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { CompareWithFn } from '@ng-select/ng-select/lib/ng-select.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isArray, isEqual } from 'lodash';

@UntilDestroy()
@Component({
    selector: 'ds-select',
    templateUrl: './select.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DS_SelectComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DS_SelectComponent<SelectOption extends { [key: string]: any }> implements OnInit {

    @HostBinding('class.scrollable') scrollable = true;

    /**
     * Textfield is disabled
     */
    @Input()
    public isDisabled = false;

    /**
     * Textfield is invalid
     */
    @Input()
    public isOnError = false;

    /**
     * Textfield custom HTML classes
     *
     */
    @Input()
    public customClasses: string[] = [];

    @Input()
    public options?: SelectOption[];

    @Input()
    public compareWith: CompareWithFn = (a, b) => isEqual(a, b);

    @Input()
    public labelKey: keyof SelectOption = 'label';

    @Input()
    public clearable: boolean = true;

    /**
     * Will only display value if mark as readOnly
     */
    @Input()
    public readOnly = false;

    /**
     * Allow multiple selection
     */
    @Input()
    public multiple = false;

    public classes$ = new BehaviorSubject<string[]>(['']);
    public control: UntypedFormControl;
    public readonlyValue$ = new BehaviorSubject<string[]>([]);


    constructor() {
        this.control = new UntypedFormControl();
    }

    public ngOnInit(): void {
        this.control.valueChanges.pipe(
            untilDestroyed(this)
        ).subscribe({
            next: (value) => {
                this.onTouched();
                this.onChange(value);
                this.updateReadonlyValue(value);
            }
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.classes$.next(this.getClasses());

        if (changes && changes['isDisabled']) {
            this.isDisabled ? this.control.disable() : this.control.enable();
        }
    }

    /**
     *
     * @internal
     */
    public onChange = (_data: SelectOption | SelectOption[]) => { };
    /**
     *
     * @internal
     */
    public onTouched = () => { };

    public getClasses(): string[] {
        const classes: string[] = [];

        if (this.isDisabled) {
            classes.push('dropdown--disabled');
        }

        if (this.isOnError) {
            classes.push('dropdown--error');
        }

        if (this.customClasses && this.customClasses.length > 0) {
            classes.push(...this.customClasses);
        }

        return classes;
    }

    // ---------- ControlValueAccessor IMPLEMENTATION ----------

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public writeValue(value: SelectOption | SelectOption[]): void {
        this.control.setValue(value, {
            emitEvent: false
        });
        this.updateReadonlyValue(value);
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.control.disable() : this.control.enable();
        this.isDisabled = isDisabled;
    }

    private updateReadonlyValue(value: SelectOption | SelectOption[]): void {
        if (isArray(value)) {
            this.readonlyValue$.next(value.map(v => v![this.labelKey]) ?? []);
        } else {
            this.readonlyValue$.next(value?.[this.labelKey] ? [value![this.labelKey]] : []);
        }
    }
}
