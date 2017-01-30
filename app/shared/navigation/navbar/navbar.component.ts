import { Component } from '@angular/core';
//import { ActivatedRoute, Params } from '@Angular/router';

import { HelpersService } from '../../helpers/helpers.service';
import { AuthService }    from '../../../core/services/auth.service';

export class OauthLink {
  icon: string;
  url:  string;
}

const OAUTHS: OauthLink[] = [
  {icon: 'facebook-official', url: 'http://localhost:3000/styleguide'},
  {icon: 'instagram', url: 'http://localhost:3000/styleguide'},
  {icon: 'linkedin', url: 'http://localhost:3000/styleguide'},
]


@Component({
  moduleId: module.id,
  selector: 'signpost-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls:  ['navbar.component.css']
})

export class NavbarComponent implements OnInit {
  showLogin: boolean = false;
  navBkgdColor: string = '#9a9a9a'
  navItemColor: string = '#c9c9c9'
  oauths = OAUTHS;

  constructor(
    private helpers: HelpersService,
    public auth:    AuthService
  ) {}

  logout(): void {
    this.auth.logout();
  }

  toggleShowLogin(): void {
    if(!this.showLogin) {
      this.showLogin = true;
    }
    else {
      this.showLogin = false;
    }
  }

  onCloseLogin(event: any) {
    this.toggleShowLogin();
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
