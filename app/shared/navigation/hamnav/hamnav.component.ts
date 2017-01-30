import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: "hamnav",
  templateUrl: 'hamnav.component.html',
  styleUrls:  ['hamnav.component.css']
})

export class HamnavComponent {
  isLoggedIn: boolean = false;
}
