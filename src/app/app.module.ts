import { ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalErrorHandler } from "./core/errors/handler/global-error-handler";

import { AppComponent     } from  "./app.component";
import { AppRoutingModule } from  "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AdminGuard } from './core/guards/admin.guard'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
