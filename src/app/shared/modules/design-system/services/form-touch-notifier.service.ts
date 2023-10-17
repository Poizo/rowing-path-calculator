import { ChangeDetectorRef, Injectable, Injector } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { markAllControlsAsTouched } from '../helpers/formgroup.helper';


/**
 * FormTouchNotifier: allow you to notify sub forms about touched event when you are using `NG_VALUE_ACCESSOR`.
 *
 * **\/!\ Only provide into the component that provide `NG_VALUE_ACCESSOR`.**
 */
@UntilDestroy()
@Injectable()
export class FormTouchNotifier {

    private form?: AbstractControl;

    constructor(private injector: Injector) { }

    /**
     * Init FormTouchNotifier
     *
     * **\/!\ You need to call this function into `ngAfterContentInit` lifecycle or later**
     *
     * @param form form to apply touch
     */
    public init(form: AbstractControl) {
        this.form = form;
        const parentControl = this.injector.get(NgControl);
        const cdr = this.injector.get(ChangeDetectorRef);
        parentControl.statusChanges!.pipe(
            untilDestroyed(this)
        ).subscribe((s: any) => {
            if (s.touched && this.form) {
                markAllControlsAsTouched(this.form);
                cdr.markForCheck();
            }
        });
    }

}
