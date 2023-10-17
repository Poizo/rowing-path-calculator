import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minSelectedValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        const currentLength = value && Array.isArray(value) ? value.length : 0;
        if (currentLength < minLength) {
            return {
                minLength: { minimum: minLength, current: currentLength }
            };
        }
        return null;
    }
}
