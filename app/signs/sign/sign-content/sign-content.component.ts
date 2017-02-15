import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { HelpersService } from '../../../shared/helpers/helpers.service';
import { AuthService } from '../../../core/services/auth.service';

import { Sign } from '../../sign.model';

@Component({
  moduleId: module.id,
  selector: 'sign-content',
  templateUrl: 'sign-content.component.html',
  styleUrls:  ['sign-content.component.css']
})

export class SignContentComponent implements OnInit {
  @Input()  sign: Sign;
  @Output() saveEE  = new EventEmitter<any>();
  @Output() destroyEE = new EventEmitter<any>();
  isOwner:             boolean = false;
  isEditing:           boolean = false;
  forSignCreation:     boolean = false;
  showPreviewLabel:    boolean = false;
  private _forNewSign: void;  // IS THIS REALLY NEEDED????
  @Input('forNewSign') set forNewSign(val: boolean) {
    if(val === true) {
      this.isEditing        = true;
      this.forSignCreation  = true;
      this.showPreviewLabel = true;
    }
  }

  constructor( private helpers: HelpersService,
               private auth:    AuthService) {}

  ngOnInit() {
    this.isOwner = this.auth.isOwner(this.sign.username);
  }

  cancel() {
    this.toggleEditing();
  }

  destroy() {
    console.log("INSIDE DELETE...");
    var delSign = this.sign;
    if(this.forSignCreation) {
      console.log("FOR NEW SIGN CREATION, SO PASSING CLOSE ONLY");
      this.destroyEE.emit({sign: null, destroy: false, close: true});
    }
    else {
      console.log("SHOULD CALL TO DESTROY SIGN; EMITTING TO SIGNCOMPONENT?");
      this.destroyEE.emit({sign: delSign, destroy: true, close: true});
    }
    this.toggleEditing(false);  // Close editing window
  }

  save(sign: Sign) {
    if(this.forSignCreation) {
      console.log("SUBMIT: THIS SHOULD CALL THE CREATE SIGN ROUTE");
    }
    else {
      console.log("SUBMIT: THIS SHOULD CALL THE UPDATE SIGN ROUTE");
    }
    // ONLY CLOSE THE ADDSIGN AREA & Toggle Editing UPON SUCCESS!!!!
    this.toggleEditing(false);       // SHOULD ONLY DO UPON SUCCESS!!!!!!!
    this.saveEE.emit(sign);    // keep passing the sign up
  }

  toggleEditing(input: any = null): void {
    if(typeof(input) === 'boolean') { this.isEditing = input; }
    else { this.isEditing = !this.isEditing; }
    console.log("EDITING TOGGLED & IS NOW: ", this.isEditing);
  }
}
