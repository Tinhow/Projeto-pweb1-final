import { ImensageService } from './../shared/services/imensage.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(private imensageService : ImensageService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
        catchError(
          resposta => this.trataRespostaErro(resposta))
    );
  }

    private trataRespostaErro(resposta: object): Observable<HttpEvent<any>> {
      if (resposta instanceof HttpErrorResponse) {
        this.imensageService.erro('Erro: ' + resposta.message);
      }

    return throwError(resposta);
  }
}
