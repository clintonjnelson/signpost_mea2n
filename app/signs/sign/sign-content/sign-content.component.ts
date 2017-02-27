import { Component, EventEmitter, Input, Output, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HelpersService } from '../../../shared/helpers/helpers.service';
import { AuthService, UserAuth } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Sign } from '../../sign.model';

@Component({
  moduleId: module.id,
  selector: 'sign-content',
  templateUrl: 'sign-content.component.html',
  styleUrls:  ['sign-content.component.css']
})

export class SignContentComponent implements OnInit {
  @ViewChild('signForm') signForm: FormGroup;
  @Input()  sign: Sign;
  @Output() saveEE  = new EventEmitter<any>();
  @Output() destroyEE = new EventEmitter<any>();
  tempSign: Sign;
  isOwner: boolean = false;
  auth: UserAuth;
  _subscription: Subscription;

  // For a new sign? If so, tailor the sign form accordingly.
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

  // ************** Auth Methods **************
  constructor( private helpers:     HelpersService,
               private authService: AuthService) {
    this.auth = authService.auth;
    this._subscription = authService.userAuthEmit.subscribe((newVal: UserAuth) => {
      this.auth = newVal;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  ngOnInit() {
    this.isOwner = this.authService.isOwner(this.sign.username);
    this.resetTempSign();
  }


  // ************* Form Methods *************
  cancel() {
    this.toggleEditing();
    this.resetTempSign();
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

  // HAVE TEMP SIGN SO DONT NEED TO PASS INTO THE METHOD.... BEST PRACTICES HERE?
  save(tempSign: Sign) {
    if(this.forSignCreation) {
      console.log("SUBMIT: THIS SHOULD CALL THE CREATE SIGN ROUTE");
    }
    else {
      console.log("SUBMIT: THIS SHOULD CALL THE UPDATE SIGN ROUTE");
      // After success, update the sign and then reset the temp sign
      this.sign = Object.assign({}, tempSign);
      this.resetTempSign();
    }
    // ONLY CLOSE THE ADDSIGN AREA & Toggle Editing UPON SUCCESS!!!!
    this.toggleEditing(false);       // SHOULD ONLY DO UPON SUCCESS!!!!!!!
    this.saveEE.emit(tempSign);      // keep passing the sign up
  }

  toggleEditing(input: any = null): void {
    if(typeof(input) === 'boolean') { this.isEditing = input; }
    else { this.isEditing = !this.isEditing; }
    console.log("EDITING TOGGLED & IS NOW: ", this.isEditing);
  }

  // ********** CONSIDER BREAKING OUT TO A SERVICE - SIMILIAR TO SIGNS *************
  // Resets the buttons that are triggered by changes
  private resetFormDisplay() {
    var controls = this.signForm.controls;
    Object.keys(controls).forEach(control => {
      controls[control].markAsPristine();
      controls[control].markAsUntouched();
    });
  }

  private resetTempSign() {
    this.tempSign = Object.assign({}, this.sign);  // Make a copy
  }
}
