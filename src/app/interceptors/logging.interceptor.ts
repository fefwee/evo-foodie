/* import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserState } from '../store/user.state';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private store:Store) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Intercepted!', req);
    const token = this.store.select(UserState.getUser).subscribe({
      next:(val)=>{
        req = req.clone({headers:new HttpHeaders().set( 'authorization', 'Bearer ' +val.access_token)})
      }
    })
    return next.handle(token)
  }
}
 */