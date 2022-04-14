import { ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule} from "./auth-routing.module";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS} from "@angular/common/http";

import { AuthComponent}          from "./auth.component";
import { LoginComponent }        from './login/login.component';
import { RegisterComponent }     from './register/register.component';
import { ForgetComponent }       from './forget/forget.component';
import { ShowIfRouteIsDirective} from "../../../directive/showIfRouteIs.directive";
import { GlobalErrorHandler}     from "../../core/errors/handler/global-error-handler";
import { AddHeaderInterceptor }  from "../../core/Interceptor/add-header.interceptor";


@NgModule({
  declarations: [
    ShowIfRouteIsDirective,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor , multi:true},
  ]
})
export class AuthModule { }
