gOnInit(): void {
        this.control.valueChanges.pipe(
            takeUntil(this.destroyer$)
        ).subscribe({
            next: (value) => {
                this.valueSize$.next((value) ? value.length : 0);
                this.onTouched();
                this.onChange(value);
                this.readonlyValue$.next(value);
            }
        });

        this.hasLink$ = this.control.statusChanges.pipe(
            startWith(this.control.disabled),
            map(() => this.control.disabled),
            map((disabled) => {
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                return disabled && this.showUrlHyperLinks ? !!this.control.value?.match(urlRegex) : false
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.classes$.next(this.getClasses());
        if (changes && changes['isDisabled']) {
            this.isDisabled ? this.control.disable() : this.control.enable();
        }
    }

    public ngOnDestroy(): void {
        this.valueSize$.complete();
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

    public markControlAsTouch() {
        if (this.touchedOnBlur) {
            this.onTouched();
        }
    }

    /**
     *
     * @internal
     */
    public onChange = (_data: string) => { }

    /**
     *
     * @internal
     */
    public onTouched = () => { }

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
import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { DS_LabelWithParam } from '../interfaces';

@Component({
    selector: 'ds-textarea',
    templateUrl: './textarea.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DS_TextareaComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DS_TextareaComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {

    @HostBinding('class.scrollable') scrollable = true;

    /**
     * Textarea placeholder
     *
     */
    @Input()
    public placeholder?: DS_LabelWithParam;

    /**
     * Textarea is disabled
     */
    @Input()
    public isDisabled = false;

    /**
     * Textarea value maximum length
     */
    @Input()
    public maxLength: number | null = null;

    /**
     * Textarea chars counter (only working if `maxLength` param not null)
     */
    @Input()
    public showCharsCounter = false;

    /**
     * Textarea is invalid
     */
    @Input()
    public isOnError = false;

    /**
     * Textarea custom HTML classes
     *
     */
    @Input()
    public customClasses: string[] = [];

    /**
     * Show a custom field for text area with url
     *
     */
    @Input()
    public showUrlHyperLinks = false;

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
    public valueSize$ = new BehaviorSubject(0);
    /**
     * @internal
     */
    public hasLink$!: Observable<boolean>;
    /**
     * @internal
     */
    public control: UntypedFormControl;
        /**
     * @internal
     */
    public destroyer$: Subject<any>;
    /**
     * @internal
     */
    public readonlyValue$ = new BehaviorSubject<string>('');

    constructor() {
        this.control = new UntypedFormControl();
        this.destroyer$ = new Subject();
    }
    public n