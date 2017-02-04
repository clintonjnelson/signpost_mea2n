import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  isLoggedIn: boolean;
  isLoggedOut: boolean;

  constructor() {
    this.isLoggedIn = !!window.localStorage.getItem('auth_key');
    this.isLoggedOut = !this.isLoggedIn;
  }

  toggleIsLoggedInOut() {
    this.isLoggedIn = !this.isLoggedIn;  // Toggle
    this.isLoggedOut = !this.isLoggedIn; // Opposite
  }

  login() {
    console.log("AUTH LOGIN CLICKED");
    window.localStorage.setItem('auth_key', 'supersecretkey');
    this.toggleIsLoggedInOut()
  }

  logout() {
    console.log("AUTH LOGOUT CLICKED");
    window.localStorage.setItem('auth_key', '');
    this.toggleIsLoggedInOut();
  }
}
