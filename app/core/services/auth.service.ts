import { Injectable } from '@angular/core';
import { Router     } from '@angular/router';

@Injectable()

export class AuthService {
  isLoggedIn: boolean;
  isLoggedOut: boolean;
  username: string;

  constructor(private router: Router) {
    this.isLoggedIn  = !!window.localStorage.getItem('authToken');
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
    this.setAuthCookies('supersecretkey', 'username');
    this.toggleIsLoggedInOut();
  }

  logout() {
    console.log("AUTH LOGOUT CLICKED");
    window.localStorage.setItem('authToken', '');
    window.localStorage.setItem('username', '');
    this.toggleIsLoggedInOut();
    this.router.navigate(['']);
  }

  /// MAYBE REFACTOR THIS INTO LOGIN, USING OPTIONAL PARAMS OF THESE VALUES
  /// IT WOULD THEN BE CLEAR WHAT IT"S DOING WHEN WE SET THE VALUES MANUALLY
  /// VERIFY WE DON"T NEED THE LOGIN FUNCTION TO HAVE PARAMS ANYWAY....
  setAuthCookies(authToken: string, username: string) {
    window.localStorage.setItem('authToken', authToken);
    window.localStorage.setItem('username', username);
  }
}
