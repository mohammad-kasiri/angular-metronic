import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { passwordMatchingValidatior } from '../../../common/validator/password-matching.validator';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  constructor(private authService :AuthService) {}


  registerForm = new FormGroup({
    email                 : new FormControl('' , [Validators.required , Validators.email]),
    password              : new FormControl('' , [Validators.required , Validators.minLength(6) , Validators.maxLength(40)]),
    password_confirmation : new FormControl('' , [Validators.required , Validators.minLength(6) , Validators.maxLength(40)]),
  },
  { validators: passwordMatchingValidatior }
  );

  get email()                   {return this.registerForm.get('email');}
  get password()                {return this.registerForm.get('password');}
  get password_confirmation()   {return this.registerForm.get('password_confirmation');}

  onSubmit()
  {
    //Check Form Is Valid Or Not
    if (!this.registerForm.valid)    return;

    this.authService.registerUser(this.registerForm.value).subscribe(res => {
      console.log(res);
    }, (err : HttpErrorResponse) => {
      console.log(err)
    })
  }

}
