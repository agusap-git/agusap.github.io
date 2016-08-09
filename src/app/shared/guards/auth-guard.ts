import {tokenNotExpired} from 'angular2-jwt';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (tokenNotExpired()) {
      return true;
    }

    this._router.navigate(['login']);
    return false;
  }
}
