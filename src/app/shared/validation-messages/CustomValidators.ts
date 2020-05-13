import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    
    public static fixedLength(value: number): ValidatorFn {
        return (c: AbstractControl) => {
            return c.value && c.value.trim().length === value 
            ? null
            : {fixedLength: true}
        }
    }

    public static isNumber(): ValidatorFn {
        return (c: AbstractControl) => {
            return !isNaN(c.value)
            ? null
            : {NaN: true}
        }
    }
}