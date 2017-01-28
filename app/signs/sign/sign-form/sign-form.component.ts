import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Sign } from '../../../sign.model';

@Component({
  moduleId: module.id,
  selector: 'sign-form',
  templateUrl: 'sign-form.component.html',
  styleUrls:  ['sign-form.component.css']
})

export class SignFormComponent {
  @Input()  sign: Sign;
  // @Input() submitAction: Function;
  // @Input() toggleEditing: Function;

  // This says we will be able to send an event with string, I think
  @Output() closeEdit: EventEmitter<string> = new EventEmitter();

  toggleEditing() {
    this.closeEdit.emit('done');
  }
}
