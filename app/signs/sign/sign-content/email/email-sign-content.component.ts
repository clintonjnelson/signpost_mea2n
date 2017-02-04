import { Component } from '@angular/core';
import { SignContentComponent } from '../sign-content.component';

@Component({
  moduleId: module.id,
  selector: 'email-sign-content',
  templateUrl: 'email-sign-content.component.html',
  styleUrls:  ['email-sign-content.component.css', '../sign-content.component.css']
})

export class EmailSignContentComponent extends SignContentComponent {
  // testing
}
