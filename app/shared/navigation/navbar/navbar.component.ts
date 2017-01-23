import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Params } from '@Angular/router';

@Component({
  moduleId: module.id,
  selector: 'signpost-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls:  ['navbar.component.css']
})

export class NavbarComponent implements OnInit {
  // @Input()    // This component expects [] data from outside
  isSignedIn: boolean;
  isSignedOut: boolean;
  myLinks: string[];       // fix this array type
  oauthLinks: string[];    // fix this array type


  constructor(
    // private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.isSignedIn = false;
    this.isSignedOut = true;
    this.myLinks = [];
    this.oauthLinks = [];
  }
}
