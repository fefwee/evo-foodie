import {
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

  public token!: string | undefined

  constructor(private store: Store) {
    this.store.select(UserState.getUser).subscribe({
      next: (token) => {
        this.token = token.access_token
      }
    })
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Intercepted!', req);
    req = req.clone({ headers: new HttpHeaders().set('authorization', `Bearer ${this.token}`) })
    return next.handle(req)
  }
}

/* req = req.clone({ headers: new HttpHeaders().set('authorization', `Bearer ${val.access_token}`) }) */
