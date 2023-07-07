import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroInterceptor } from './erro.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErroInterceptor,
      multi: true
    }
  ]

})
export class InterceptadorModule { }
