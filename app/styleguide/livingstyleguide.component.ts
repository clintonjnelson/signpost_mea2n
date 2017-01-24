import { Component } from '@angular/core';
import { User, Sign } from '../shared/search/search-results/search-results.component';

const USERS: User[] = [{username: 'Jen'}, {username: 'clint'}];
const SIGNS: Sign[] = [
    { bgColor: 'purple', icon: 'instagram', userId: 'jenstagram', knownAs: 'Jennie-bones' },
    { bgColor: 'blue',   icon: 'facebook',  userId: 'nelson',     knownAs: 'Babyface' }
  ];

;@Component({
  moduleId: module.id,
  selector: 'livingstyleguide',
  templateUrl: 'livingstyleguide.component.html',
  styleUrls:  ['livingstyleguide.component.css']
})

export class LivingStyleGuideComponent {
  // May need to hardcode things in here for components brought in

  // SearchResultsComponent
  users = USERS;
  signs = SIGNS;
}
