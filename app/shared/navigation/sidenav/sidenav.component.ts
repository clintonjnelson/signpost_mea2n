import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent {
  side = 'start';
}
