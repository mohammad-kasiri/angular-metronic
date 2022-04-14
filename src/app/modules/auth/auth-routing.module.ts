import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgetComponent} from "./forget/forget.component";
import {AuthComponent} from "./auth.component";


const routes: Routes = [
  {path: ''    , component: AuthComponent ,
    children:[
      {path: ''         , redirectTo: 'login' , pathMatch:'prefix'},
      {path: 'login'    , component: LoginComponent},
      {path: 'register' , component: RegisterComponent},
      {path: 'forget'   , component: ForgetComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
