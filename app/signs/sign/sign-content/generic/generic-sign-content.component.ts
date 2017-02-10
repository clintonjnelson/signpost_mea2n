import { Component } from '@angular/core';
import { SignContentComponent } from '../sign-content.component';
import { Sign, PhoneSign, EmailSign } from '../../../sign.model';

@Component({
  moduleId: module.id,
  selector: 'generic-sign-content',
  templateUrl: 'generic-sign-content.component.html',
  styleUrls:  ['generic-sign-content.component.css', '../sign-content.component.css']
})

export class GenericSignContentComponent extends SignContentComponent {
  // Inherits capabilities from SignContentComponent

  // TODO: FIX THIS PARAM TYPE TO BE ANY SUBCLASS OF SIGN ************
  titleText(sign: any): string {
    switch(sign.signName) {
      case 'email':   return sign.email;
      case 'phone':   return sign.phone;
      case 'website': return sign.linkUrl;
    }
  }

  firstLineText(sign: Sign): string {
    switch(sign.signName) {
      case 'email':   return sign.description;
      case 'phone':   return sign.description;
      case 'website': return sign.description;
    }
  }
}
