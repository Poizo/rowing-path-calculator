import { ChangeDetectionStrategy, Component, forwardRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DS_LabelWithParam } from '../interfaces';
/**
 * Doc on the checkbox component
 */
@Component({
    selector: 'ds-checkbox',
    templateUrl: './checkbox.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DS_CheckboxComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DS_CheckboxComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {

    /**
     * Checkbox label
     *
     */
    @Input()
    public label?: DS_LabelWithParam;

    /**
     * Checkbox id
     *
     * @required
     */
    @Input()
    public id!: string;

    /**
     * Checkbox take full width
     */
    @Input()
    public isFullWidth = false;

    /**
     * Checkbox is invalid
     */
    @Input()
    public isOnError = false;

    /**
     * Checkbox custom HTML classes
     *
     */
    @Input()
    public customClasses: string[] = [];

    /**
     * Will only display value if mark as readOnly
     */
    @Input()
    public readOnly = false;

    /**
     * Checkbox is disabled
     */
    @Input()
    public isDisabled?: boolean;

    /**
     * @internal
     */
    public readonlyValue$ = new BehaviorSubject<string>('');

    /**
     * @internal
     */
    classes$ = new BehaviorSubject<string[]>(['']);

    /**
     * @internal
     */
    control = new UntypedFormControl();
    /**
     * @internal
     */
    destroyer$ = new Subject();

    constructor() { }

    ngOnInit(): void {
        this.control.valueChanges.pipe(
            takeUntil(this.destroyer$)
        ).subscribe(value => {
            this.onChange(value);
            this.updateReadOnlyValue(value);
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.classes$.next(this.getClasses());
        if (changes && changes['isDisabled']) {
            this.isDisabled ? this.control.disable() : this.control.enable();
        }
    }

    ngOnDestroy(): void {
        this.destroyer$.next(null);
        this.destroyer$.complete();
    }

    getClasses(): string[] {
        const classes: string[] = [];

        if (!!this.isDisabled) {
            classes.push('-disabled');
        }

        if (this.isFullWidth) {
            classes.push('width-full');
        }

        if (this.isOnError) {
            classes.push('-error');
        }

        if (this.customClasses && this.customClasses.length > 0) {
            classes.push(...this.customClasses);
        }

        return classes;
    }

    // ---------- ControlValueAccessor IMPLEMENTATION ----------

    /**
     *
     * @internal
     */
    public onChange = (_data: boolean) => { };
    /**
     *
     * @internal
     */
    public onTouched = () => { };

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public writeValue(value: boolean): void {
        this.control.setValue(value, {
            emitEvent: false
        });
        this.updateReadOnlyValue(value);
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.control.disable() : this.control.enable();
        this.isDisabled = isDisabled;
        this.classes$.next(this.getClasses());
    }

    private updateReadOnlyValue(value: boolean): void {
        this.readonlyValue$.next(value ? 'COMMON.YES' : 'COMMON.NO');
    }

}
