import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export class CustomValidators {

    public static atLeastOneChecked(): ValidatorFn {
        return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
            const group = formGroup as FormGroup;
            const controls = Object.keys(group.controls);
            return controls.some(control => formGroup.get(control)?.value) ?
                null : { noneChecked: true };
        };
    }
}
