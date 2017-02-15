import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  isLoggedIn: boolean;
  isLoggedOut: boolean;

  constructor() {
    this.isLoggedIn = !!window.localStorage.getItem('auth_key');
    this.isLoggedOut = !this.isLoggedIn;
  }

  isOwner(username: string) {
    // GET USERNAME FROM SESSION STORAGE & COMPARE
    // MAYBE STORE USERNAME LOCALLY IN THIS AUTH SERVICE
    var gotUsernameFromSomewhere = "user1";
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
    this.toggleIsLoggedInOut()
  }

  logout() {
    console.log("AUTH LOGOUT CLICKED");
    window.localStorage.setItem('auth_key', '');
    this.toggleIsLoggedInOut();
  }
}
