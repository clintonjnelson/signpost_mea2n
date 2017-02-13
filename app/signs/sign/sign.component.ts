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
  @Input() forNewSign: boolean = false;
  @Input() sign: Sign;

  constructor( private helpers: HelpersService ) {}

  getFormType(signType: string): string {
    switch (signType) {
      case 'custom':   return 'custom';
      case 'generic':  return 'generic';
      case 'default':  return 'default';
      default: console.log('No sign type match found for ', signType);
    }
  }
}




  // // FIX ONCE HAVE THE SESSIONS SERVICE TO CHECK OWNER VS SIGN OWNER
  // isOwner(checkSign: Sign): boolean {
  //   return (true ? true : false)
  // }


  // toggleEditing(): void {
  //   this.isEditing = !this.isEditing;
  //   console.log("EDITING TOGGLED & IS NOW: ", this.isEditing);
  // }
// // Sign Form Stuff - NEEDS TO BE REFINED!!!!!!
//   onClose(event: any) {
//     console.log("Closed. Event is: ", event);
//     // this.toggleEditing();
//   }

//   onSubmit(sign: Sign) {
//     console.log("Closed. Event is: ", sign);

//     // Update Date - USE HTTP SERVICE CALL HERE!!!
//     this.sign = sign;
//     // this.toggleEditing();  // Close the edit box
//   }

// HTML part is: (close)="onClose($event)" (submit)="onSubmit($event)"
