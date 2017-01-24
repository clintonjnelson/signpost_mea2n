import { Component, Input, OnInit } from '@angular/core';

export class Sign {
  bgColor: string;
  icon: string;
  userId: string;    // THIS MIGHT BE NUMBER INSTEAD - CHECK API RESPONSE
  knownAs: string;
}

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

  iconClass(iconName: string, size: string = '4'): string {
    return ('fa fa-' + iconName + ' fa-' + size);
  }
}
