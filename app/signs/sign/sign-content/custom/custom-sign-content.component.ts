import { Component } from '@angular/core';
import { SignContentComponent } from '../sign-content.component';

@Component({
  moduleId: module.id,
  selector: 'custom-sign-content',
  templateUrl: 'custom-sign-content.component.html',
  styleUrls:  ['custom-sign-content.component.css', '../sign-content.component.css']
})

export class CustomSignContentComponent extends SignContentComponent {

  // validationErrorMessages = {
  //   signName: {
  //     required: 'A title is required.',
  //   },
  //   linkUrl: {
  //     required: 'A web address is required.',
  //   },
  //   knownAs: {},
  //   description: {}
  // };
}
