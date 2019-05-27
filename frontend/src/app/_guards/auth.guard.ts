import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router, private authService: AuthService ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      const rol = currentUser.privilegesTypeUser;
      const url = route.routeConfig.path;
      console.log(url);

      return this.checkPermisions(rol, url);
    }

    this.router.navigate(['/login']);
    return false;
  }

  checkPermisions(rol: string, route: string) {
    if ( rol === route.toUpperCase() ) {
      return true;
    } else if (route === 'info') {
      return true;
    } else {
      this.router.navigate(['/unathorized']);
      return false;
    }
  }
}
