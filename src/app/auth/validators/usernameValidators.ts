import { ValidationService } from './../../services/validation.service';
import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidators {

    constructor(private validationService: ValidationService) {

    }
    static noSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { noSpace: true };
        else return null;
    }

}