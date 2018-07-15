import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static isMatch(control: AbstractControl): ValidationErrors | null {
        const password = control.get('password').value
        const isMatch = control.get('passwordMatch').value
        if (password != isMatch) {
            return { isMatch: true }

        }
        return null
    }
}