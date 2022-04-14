import { Injectable } from '@angular/core';
import {HttpClient , HttpParams , HttpErrorResponse } from "@angular/common/http";
import {UserRegister_Req, UserRegister_Success_Res , UserRegister_Error_Res} from "../models/user-register.model";
import { Observable} from "rxjs";
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private RegisterUrl = 'http://127.0.0.1:8000/api/register';
  private LoginUrl    = 'http://127.0.0.1:8000/api/login';

  constructor(private http: HttpClient) {}

  registerUser(userData : any) : Observable<any> {
    return this.http.post<UserRegister_Success_Res>(this.RegisterUrl, userData)
  }

  loginUser(userData : any) : Observable<any> {
     return this.http.post<any>(this.LoginUrl, userData)
  }
}

