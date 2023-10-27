import {
    ChangeDetectionStrategy,
    Component, forwardRef, HostBinding, Input,
    OnChanges,
    OnDestroy,
    OnInit, SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DS_Textfield_type_Enum } from '../enums/public-api';
import { DS_LabelWithParam } from '../interfaces';

/**
 * Doc on the textfield
 */
@Component({
    selector: 'ds-textfield',
    templateUrl: './textfield.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DS_TextfieldComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DS_TextfieldComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {

    @HostBinding('class.scrollable') scrollable = true;

    /**
     * Textfield id
     * @required
     */
    @Input()
    public id!: string;

    /**
     * Textfield placeholder
     *
     */
    @Input()
    public placeholder?: DS_LabelWithParam;

    /**
     * Textfield is disabled
     */
    @Input()
    public isDisabled = false;

    /**
     * Textfield type (number, text, submit…)
     */
    @Input()
    public type = DS_Textfield_type_Enum.text;

    /**
     * Textfield max length
     */
    @Input()
    public maxLength: number | null = null;

    /**
     * Textfield min length
     */
    @Input()
    public minLength: number | null = null;

    /**
     * Textfield is invalid
     */
    @Input()
    public isOnError = false;

    /**
     * Textfield is use for search input
     */
    @Input()
    public isSearchInput = false;

    /**
     * Textfield custom HTML classes
     */
    @Input()
    public customClasses: string[] = [];

    /**
     * Will only display value if mark as readOnly
     */
    @Input()
    public readOnly = false;

    /**
     * Does the control must be mark as touch on blur
     */
    @Input()
    public touchedOnBlur = false;

    /**
     * @internal
     */
    classes$ = new BehaviorSubject<string[]>(['']);
    /**
     * @internal
     */
    iconClasses$ = new BehaviorSubject<string[]>(['']);
    /**
     * @internal
     */
    readonlyValue$ = new BehaviorSubject<string>('');

    /**
     * @internal
     */
    public control: UntypedFormControl;
    /**
     * @internal
     */
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

        if (this.isSearchInput) {
            classes.push('-search');
        }

        if (this.customClasses && this.customClasses.length > 0) {
            classes.push(...this.customClasses);
        }

        return classes;
    }

    public markControlAsTouch() {
        if (this.touchedOnBlur) {
            this.onTouched();
        }
    }

    /**
     *
     * @internal
     */
    public onChange = (_data: string) => { };
    /**
     *
     * @internal
     */
    public onTouched = () => { };

    // ---------- ControlValueAccessor IMPLEMENTATION ----------

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public writeValue(value: string): void {
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

}
