import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sign } from './sign.model';


@Component({
  moduleId: module.id,
  selector: 'signs-list',
  templateUrl: 'signs.component.html',
  styleUrls:  ['signs.component.css']
})

export class SignsComponent {
  @Input() signs: Sign[];
  @Output() saveEE    = new EventEmitter<any>()
  @Output() destroyEE = new EventEmitter<any>();

  destroy(event: any) {
    console.log("SIGNS COMPONENT DESTROY EVENT IS EMITTING EVENT TO USER-PAGE: ", event);
    this.destroyEE.emit(event);
  }

  save(event: any): void {
    console.log("SIGN AT THE SIGNS COMPONENT LEVEL IS: ", event);
    this.saveEE.emit(event);    // keep passing the sign up
  }
}
