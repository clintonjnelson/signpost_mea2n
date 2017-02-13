import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HelpersService } from '../../../shared/helpers/helpers.service';

import { Sign } from '../../sign.model';

@Component({
  moduleId: module.id,
  selector: 'sign-content',
  templateUrl: 'sign-content.component.html',
  styleUrls:  ['sign-content.component.css']
})

export class SignContentComponent {
  @Input() sign: Sign;
  @Output() close  = new EventEmitter<any>();
  @Output() submit = new EventEmitter<Sign>();

  isEditing: boolean = false;
  forSignCreation: boolean = false;
  @Input('forNewSign') set forNewSign(newSignVal: boolean = null) {
    if(newSignVal === true) {
      this.isEditing = true;
      this.forSignCreation = true;
    }
  }


  constructor( private helpers: HelpersService ) {}

  cancel() {
    this.toggleEditing();
  }

  save(sign: Sign) {
    if(this.forSignCreation) {
      console.log("SUBMIT: THIS SHOULD CALL THE CREATE SIGN ROUTE");
    }
    else {
      console.log("SUBMIT: THIS SHOULD CALL THE UPDATE SIGN ROUTE");
    }
    this.toggleEditing();    // SHOULD ONLY DO UPON SUCCESS!!!!!!!
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    console.log("EDITING TOGGLED & IS NOW: ", this.isEditing);
  }

  // FIX ONCE HAVE THE SESSIONS SERVICE TO CHECK OWNER VS SIGN OWNER
  isOwner(checkSign: Sign): boolean {
    return (true ? true : false);
  }
}
