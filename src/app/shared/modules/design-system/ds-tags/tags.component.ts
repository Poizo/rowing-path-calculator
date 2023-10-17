import { AfterContentInit, ChangeDetectionStrategy, Component, forwardRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { FormTouchNotifier } from '../services/public-api';

enum DS_TagsFormControlsEnum {
    TAGS = 'tags',
}

type FormType = {
    [DS_TagsFormControlsEnum.TAGS]: FormControl<string[] | null>;
};

@UntilDestroy()
@Component({
    selector: 'ds-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DS_TagsComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DS_TagsComponent),
            multi: true
        },
        FormTouchNotifier
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DS_TagsComponent implements OnInit, OnChanges, ControlValueAccessor, Validator, AfterContentInit {

    @HostBinding('class.scrollable') scrollable = true;

    /**
     * Tags is disabled
     */
    @Input()
    public isDisabled = false;

    /**
     * Tags is invalid
     */
    @Input()
    public isOnError = false;

    /**
     * Tags custom HTML classes
     */
    @Input()
    public customClasses: string[] = [];

    /**
     * Will only display value if mark as readOnly
     */
    @Input()
    public readOnly = false;

    public readonly DS_TagsFormControlsEnum = DS_TagsFormControlsEnum;

    public classes$ = new BehaviorSubject<string[]>(['']);
    public form!: FormGroup<FormType>;

    constructor(
        private touchNotifier: FormTouchNotifier
    ) {
        this.form = this.buildForm();
    }

    ngOnInit(): void {
        this.form.valueChanges.pipe(
            untilDestroyed(this)
        ).subscribe({
            next: (value) => {
                this.onTouched();
                this.onChange(value?.tags || []);
            }
        });
    }

    public ngAfterContentInit(): void {
        this.touchNotifier.init(this.form);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.classes$.next(this.getClasses());
        if (changes && changes['isDisabled']) {
            this.isDisabled ? this.form.disable() : this.form.enable();
        }
    }

    public getClasses(): string[] {
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
    public onChange = (_data: string[]) => { };
    /**
     *
     * @internal
     */
    public onTouched = () => { };

    // ---------- ControlValueAccessor IMPLEMENTATION ----------

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public writeValue(values?: string[]): void {
        this.fillForm(values || []);
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        isDisabled ? this.form.disable() : this.form.enable();
        this.isDisabled = isDisabled;
    }

    public validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return this.form.errors;
    }

    public fillForm(value: string[]): void {
        this.form.controls[DS_TagsFormControlsEnum.TAGS].setValue(value || []);
    }

    addTag(name: string) {
        return name;
    }

    private buildForm(): FormGroup<FormType> {
        return new FormGroup<FormType>({
            [DS_TagsFormControlsEnum.TAGS]: new FormControl<string[]>([]),
        });
    }
}
