import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
{
  const password = control.get('password');
  const confirmPassword = control.get('password_confirmation');
  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};
