import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {SiteRoutingModule} from "./site-routing.module";
import { RouterModule } from '@angular/router';
import {SiteComponent} from "./site.component";




@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SiteRoutingModule
  ],
  bootstrap: [SiteComponent]
})
export class SiteModule { }
