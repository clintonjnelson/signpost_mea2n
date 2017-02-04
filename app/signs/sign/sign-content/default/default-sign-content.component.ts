import { Component } from '@angular/core';
import { SignContentComponent } from '../sign-content.component';

@Component({
  moduleId: module.id,
  selector: 'default-sign-content',
  templateUrl: 'default-sign-content.component.html',
  styleUrls:  ['default-sign-content.component.css', '../sign-content.component.css']
})

export class DefaultSignContentComponent extends SignContentComponent {
  // See SignContentComponent for data
}
