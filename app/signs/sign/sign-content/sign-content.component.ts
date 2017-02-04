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

  constructor( private helpers: HelpersService ) {}

  // Event Emitter functions back to parent component - ****REMOVE THESE*****
  emitCancel() {
    this.close.emit(null);
    this.toggleEditing();
  }

  emitSubmit(sign: Sign) {
    this.submit.emit(sign);
    this.toggleEditing();    // SHOULD ONLY DO UPON SUCCESS!!!!!!!
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    console.log("EDITING TOGGLED & IS NOW: ", this.isEditing);
  }

  // FIX ONCE HAVE THE SESSIONS SERVICE TO CHECK OWNER VS SIGN OWNER
  isOwner(checkSign: Sign): boolean {
    return (true ? true : false)
  }
}
