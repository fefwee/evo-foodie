import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { UserState } from '../store/user.state';

export const roleAccessGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const store = inject(Store);
    const router = inject(Router);
    const roleUser: any = store.select(UserState.getUser).subscribe(/* {
      next: (val) => {
        if (val.access_token && val.role === 'admin') {
          return true;
        } else {
          return router.navigateByUrl('/access');
        }
      }
    } */)  
    return roleUser

  };