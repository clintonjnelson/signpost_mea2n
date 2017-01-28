import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Sign } from '../../../../sign.model';
import { HelpersService } from '../../../../../shared/helpers/helpers.service';


@Component({
  moduleId: module.id,
  selector: 'email-sign-form',
  templateUrl: 'email-sign-form.component.html',
  styleUrls:  ['email-sign-form.component.css']
})

export class EmailSignFormComponent {
  @Input()  sign: Sign;
  @Output() close  = new EventEmitter<any>();
  @Output() submit = new EventEmitter<Sign>();

  constructor( private helpers: HelpersService ) {}

  // Event Emitter functions back to parent component
  emitCancel() {
    this.close.emit(null);
  }

  emitSubmit(sign: Sign) {
    this.submit.emit(sign);
  }
}
