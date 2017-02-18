import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  isLoggedIn: boolean;
  isLoggedOut: boolean;
  username: string;

  constructor() {
    this.isLoggedIn  = !!window.localStorage.getItem('auth_key');
    this.isLoggedOut = !this.isLoggedIn;
    this.username    = window.localStorage.getItem('username');
  }

  isOwner(username: string) {
    // GET USERNAME FROM SESSION STORAGE & COMPARE
    // MAYBE STORE USERNAME LOCALLY IN THIS AUTH SERVICE

    // RETURN THE COMPARISON OF USERNAMES
    return (true ? true : false);
  }

  toggleIsLoggedInOut() {
    this.isLoggedIn = !this.isLoggedIn;  // Toggle
    this.isLoggedOut = !this.isLoggedIn; // Opposite
  }

  login() {
    console.log("AUTH LOGIN CLICKED");
    window.localStorage.setItem('auth_key', 'supersecretkey');
    window.localStorage.setItem('username', 'adminuser');
    this.toggleIsLoggedInOut()
  }

  logout() {
    console.log("AUTH LOGOUT CLICKED");
    window.localStorage.setItem('auth_key', '');
    window.localStorage.setItem('username', '')
    this.toggleIsLoggedInOut();
  }
}
