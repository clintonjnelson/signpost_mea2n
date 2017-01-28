import { Component, Input, OnInit } from '@angular/core';

import { Sign } from '../signs/sign.model';


// SAME THING AS ANOTHER COMPONENT HAS, SO BREAK OUT & SHARE
export class User {
  username: string;
}

@Component({
  moduleId: module.id,
  selector: 'search-results',
  templateUrl: 'search-results.component.html',
  styleUrls:  ['search-results.component.css']
})

export class SearchResultsComponent {
  @Input() users: User[];
  @Input() signs: Sign[];

  // GET THIS FROM HELPER SERVICE
  iconClass(iconName: string, size: string = '4'): string {
    return (`fa fa-${iconName} fa-${size}x`);
  }
}
