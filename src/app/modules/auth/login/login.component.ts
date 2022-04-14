import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { AuthService } from "../../../core/services/auth.service";
import { CredentialService } from "../../../core/services/credentials.service";
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService :AuthService ,
               private credentialService : CredentialService ,
               private router : Router ) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email     : new FormControl('' , [Validators.required , Validators.email]) ,
    password  : new FormControl('' , [Validators.required , Validators.minLength(6) , Validators.maxLength(40)]) ,
    remember  : new FormControl()
  });

  get email()                   {return this.loginForm.get('email');}
  get password()                {return this.loginForm.get('password');}


  onSubmit() {
    //Check Form Is Valid Or Not
    if (!this.loginForm.valid)    return;


    this.authService.loginUser(this.loginForm.value).subscribe(res => {
        if(res.user.level == 'user')
          this.credentialService.forUser().setToken(res.token);

        if(res.user.level == 'admin')
          this.credentialService.forAdmin().setToken(res.token);

        this.router.navigate(['/']);
        
    }, (err : HttpErrorResponse) => {
      if(err.status == 401) {
        // @ts-ignore
        Swal.fire({
          icon: 'error',
          title: 'عملیات ناموفّق',
          text: 'نام کاربری یا کلمه ی عبور وارد شده صحیح نمی باشد',
        })
      }
    })
  }
}
