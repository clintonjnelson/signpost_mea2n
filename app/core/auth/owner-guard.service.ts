import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Injectable()

export class OwnerGuard implements CanActivate {
  constructor (private authService:  AuthService,
               private router:       Router,
               private notification: NotificationService,
               private route:        ActivatedRouteSnapshot) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    // MUST have the username param to use Owner auth guard
    let username: string = this.route.params['username'];

    return this.checkOwnerLogin(username, url);
  }

  checkOwnerLogin(username: string, url: string): boolean {
    // Authorized Owner
    if(this.authService.auth.isLoggedIn && this.authService.isOwner(username)) { return true; }

    // Unauthorized
    if(!this.authService.auth.isLoggedIn) {

      // Set for re-routing after login
      this.authService.redirectUrl = url;

      // Navigate to home & notify for login
      this.notification.notify('warning', 'Please login first.');
      this.router.navigate(['']);
    }
    else {
      let currentUserUsername     = this.authService.auth.username;
      let currentUserSettingsPath = currentUserUsername + '/settings'
      // Send them to THEIR OWN settings page
      this.router.navigate([currentUserSettingsPath]);
    }

    return false;
  }
}
