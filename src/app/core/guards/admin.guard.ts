import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {map} from 'rxjs/operators';
import {UserService} from "../services/user.service";


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.userService.isAdmin()) {
      return true;
    }

    return this.userService.currentUser$.pipe(map(data => {
      if (this.userService.isAdmin()) {
        return true;
      }

      this.userService.logout();
      this.router.navigate(['/authentication']);
      return false;
    }));
  }

}
