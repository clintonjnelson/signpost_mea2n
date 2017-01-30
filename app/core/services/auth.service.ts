import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  isLoggedIn: boolean = false;

  login() {
    console.log("AUTH LOGIN CLICKED");
    window.localStorage.setItem('auth_key', 'supersecretkey');
    this.isLoggedIn = true;
  }

  logout() {
    console.log("AUTH LOGOUT CLICKED");
    window.localStorage.setItem('auth_key', '');
    this.isLoggedIn = false;
  }
}
