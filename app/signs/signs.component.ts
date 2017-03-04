import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';
import { AuthService } from '../core/services/auth.service';
import { Sign } from './sign.model';


@Component({
  moduleId:       module.id,
  selector:       'signs-list',
  templateUrl:    'signs.component.html',
  styleUrls:     ['signs.component.css'],
  directives:    [Dragula],
  viewProviders: [DragulaService],
})

export class SignsComponent {
  @Input() signs: Sign[];
  @Output() saveEE    = new EventEmitter<any>()
  @Output() destroyEE = new EventEmitter<any>();
  isOwner: boolean;

  constructor(private dragulaService: DragulaService, private authService: AuthService) {
    this.isOwner = authService.isOwner();
    dragulaService.drop.subscribe((val) => {
      console.log("DROPPED ITEM IS: ", val);
    });
  }

  destroy(event: any) {
    console.log("SIGNS COMPONENT DESTROY EVENT IS EMITTING EVENT TO USER-PAGE: ", event);
    this.destroyEE.emit(event);
  }

  save(event: any): void {
    console.log("SIGN AT THE SIGNS COMPONENT LEVEL IS: ", event);
    this.saveEE.emit(event);    // keep passing the sign up
  }
}
