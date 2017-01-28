import { Component, Input} from '@angular/core';

import { Sign } from '../sign.model';

import { HelpersService } from '../../shared/helpers/helpers.service';

@Component({
  moduleId: module.id,
  selector: 'sign',
  templateUrl: 'sign.component.html',
  styleUrls:  ['sign.component.css']
})

export class SignComponent {
  @Input() sign: Sign;
  icons:         string  = '60px';
  isEditing:     boolean = false;

  constructor( private helpers: HelpersService ) {}


  // FIX ONCE HAVE THE SESSIONS SERVICE TO CHECK OWNER VS SIGN OWNER
  isOwner(checkSign: Sign): boolean {
    return (true ? true : false)
  }


  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    console.log("EDITING TOGGLED & IS NOW: ", this.isEditing);
  }

  getFormType(signType: string): string {
    console.log("SIGN TYPE SUBMITTED IS: ", signType);
    switch (signType) {
      case 'custom': return 'custom';
      case 'email':  return 'email';
      case 'phone':  return 'phone';
      default:       return 'default';
    }
  }


  // Sign Form Stuff - NEEDS TO BE REFINED!!!!!!
  onClose(event: any) {
    console.log(event);
    this.toggleEditing();
  }

  onSubmit(sign: Sign) {
    console.log(event);

    // Update Date - USE HTTP SERVICE CALL HERE!!!
    this.sign = sign;
    this.toggleEditing();  // Close the edit box
  }

  // *********** REALLY COOL FEATURE - MAYBE USE NgComponentOutlet???****************
  // HTML FOR IT IS: '<div ng-include="getFormUrl()"></div>'

  // It uses the functions below to get the URL to a HTML file to load dynamically

  // linker(scope, elem, attrs) {
  //   var base         = 'templates/directives/signforms/';
  //   var end          = '_sign_form.html';
  //   var formType     = getFormType(scope.sign.signType);
  //   var templateUrl  = base + formType + end;

  //   // page dynamically choose sign template
  //   scope.getFormUrl = function() {
  //     return templateUrl;
  //   };


  //   // Helper function to return corresponding form type
  //   getFormType(signType: string) {
  //     var signMap = {
  //       custom:     'custom',
  //       email:      'email',
  //       phone:      'phone',
  //     };

  //     return signMap[signType] || 'default';
  //   }
  // }
}
