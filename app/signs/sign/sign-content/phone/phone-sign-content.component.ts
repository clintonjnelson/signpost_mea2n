import { Component } from '@angular/core';
import { SignContentComponent } from '../sign-content.component';

@Component({
  moduleId: module.id,
  selector: 'phone-sign-content',
  templateUrl: 'phone-sign-content.component.html',
  styleUrls:  ['phone-sign-content.component.css', '../sign-content.component.css']
})

export class PhoneSignContentComponent extends SignContentComponent {

}
