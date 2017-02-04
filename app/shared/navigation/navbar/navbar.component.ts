import { Component } from '@angular/core';
//import { ActivatedRoute, Params } from '@Angular/router';

import { HelpersService } from '../../helpers/helpers.service';
import { AuthService }    from '../../../core/services/auth.service';

export class OauthLink {
  icon: string;
  url:  string;
  bgColor: string;
}

const OAUTHS: OauthLink[] = [
  {icon: 'facebook-official', url: 'http://localhost:3000/styleguide', bgColor: ''},
  {icon: 'instagram', url: 'http://localhost:3000/styleguide', bgColor: ''},
  {icon: 'linkedin', url: 'http://localhost:3000/styleguide', bgColor: ''},
]


@Component({
  moduleId: module.id,
  selector: 'signpost-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls:  ['navbar.component.css']
})

export class NavbarComponent {
  // Logged OUT links
  showLoginLinks: boolean = false;
  showSignpostLoginForm: boolean = false;
  // navBkgdColor: string = '#9a9a9a';
  // navItemColor: string = '#c9c9c9';
  oauthLinks = OAUTHS;
  // Logged IN links
  showUserNavLinks: boolean = false;


  constructor(
    private helpers: HelpersService,
    public  auth:    AuthService
  ) {}

  //Logged OUT Helpers
  toggleShowSignpostLoginForm(input: any = null): void {
    // If setting value directly, do that.
    if(typeof(input) === 'boolean') {
      this.showSignpostLoginForm = input;
    }
    // Else, just toggle the value
    else {
      this.showSignpostLoginForm = !this.showSignpostLoginForm;
    }
  }

  toggleShowLoginLinks(input: any = null): void {
    // If setting value directly, do that.
    if(typeof(input) === 'boolean') {
      this.showLoginLinks = input;
    }
    // Else, just toggle the value
    else {
      this.showLoginLinks = !this.showLoginLinks;
    }
    if(this.showSignpostLoginForm) {
      this.toggleShowSignpostLoginForm(false);
    }
  }

  onCloseLogin(event: any) {
    this.toggleShowSignpostLoginForm();
  }

  // Logged IN Helpers
  toggleShowUserNavLinks(input: any = null) {
    // If setting value directly, do that.
    if(typeof(input) === 'boolean') {
      this.showUserNavLinks = input;
    }
    // Else, just toggle the value
    else {
    this.showUserNavLinks = !this.showUserNavLinks
    }
  }

  logout(): void {
    this.auth.logout();
  }
}

// @Input()    // This component expects [] data from outside
// isSignedIn: boolean;
// isSignedOut: boolean;
// myLinks: string[];       // fix this array type
// oauthLinks: string[];    // fix this array type

// this.isSignedIn = false;
// this.isSignedOut = true;
// this.myLinks = [];
// this.oauthLinks = [];
