import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Sign } from '../../../../sign.model';
import { HelpersService } from '../../../../../shared/helpers/helpers.service';


@Component({
  moduleId: module.id,
  selector: 'custom-sign-form',
  templateUrl: 'custom-sign-form.component.html',
  styleUrls:  ['custom-sign-form.component.css']
})

export class CustomSignFormComponent {
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
