/* import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';
import { Store } from '@ngxs/store';
import { UserState } from '../store/user.state';

export const roleAccessGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const store = inject(Store);
    const router = inject(Router);
    store.select(UserState.getUser)

    if (store.select(UserState.getUser)=== 'admin') {
      return true;
    } else {
      return router.navigateByUrl('/error');
    }
  }; */