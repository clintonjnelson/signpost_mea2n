import { Component, Input } from '@angular/core';
import { Sign, PhoneSign, EmailSign } from './sign.model';


@Component({
  moduleId: module.id,
  selector: 'signs-list',
  templateUrl: 'signs.component.html',
  styleUrls:  ['signs.component.css']
})

export class SignsComponent {
  @Input() signs: Sign[];
}
