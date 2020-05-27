import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth-interceptor";
import {AdminGuard} from "./guards/admin.guard";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ]
})
export class CoreModule { }
