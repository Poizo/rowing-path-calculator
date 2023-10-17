erfaces';

/**
 * Doc on the textfield
 */
@Component({
    selector: 'ds-datepicker',
    templateUrl: './datepicker.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DS_DatepickerComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DS_DatepickerComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DS_DatepickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor, Validator {

    @HostBinding('class.scrollable') scrollable = true;

    /**
     * Datepicker placeholder
     *
     */
    @Input()
    public placeholder?: DS_LabelWithParam;

    /**
     * Datepicker is disabled
     */
    @Input()
    public isDisabled = false;

    /**
     * Datepicker is invalid
     */
    @Input()
    public isOnError = false;

    /**
     * Datepicker custom HTML classes
     */
    @Input()
    public customClasses: string[] = [];

    /**
     * Will only display value if mark as readOnly
     */
    @Input()
    public readOnly = false;

    classes$ = new BehaviorSubject<string[]>(['']);
    readonlyValue$ = new BehaviorSubject<Date | null>(null);

    public control: UntypedFormControl;
    public destroyer$: Subject<any>;

    constructor() {
        this.control = new UntypedFormControl();
        this.destroyer$ = new Subject();
    }

    public ngOnInit(): void {
        this.control.valueChanges.pipe(
            takeUntil(this.destroyer$)
        ).subscribe({
            next: (value) => {
                this.onTouched();
                this.onChange(value);
                this.readonlyValue$.next(value);
            }
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.classes$.next(this.getClasses());
        if (changes && changes['isDisabled']) {
            this.isDisabled ? this.control.disable() : this.control.enable();
        }
    }

    public ngOnDestroy(): void {
        this.destroyer$.next(null);
        this.destroyer$.complete();
    }

    getClasses(): string[] {
        const classes: string[] = [];

        if (this.isDisabled) {
            classes.push('-disabled');
        }

        if (this.isOnError) {
            classes.push('-error');
        }

        if (this.customClasses && this.customClasses.length > 0) {
            classes.push(...this.customClasses);
        }

        return classes;
    }

    /**
     *
     * @internal
     */
    public onChange = (_data: Date) => { };
    /**
     *
     * @internal
     */
    public onTouched = () => { };

    // ---------- ControlValueAccessor IMPLEMENTATION ----------

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public writeValue(value: Date): void {
        this.control.setValue(value, {
            emitEvent: false
        });
        this.readonlyValue$.next(value);
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.control.disable() : this.control.enable();
        this.isDisabled = isDisabled;
    }

    public validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return this.control.errors;
    }

}
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    Input,
    OnChanges,
    OnDestroy,
    OnInit, SimpleChanges
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, UntypedFormControl, ValidationErrors, Validator } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DS_LabelWithParam } from '../int