import { Component, Input, OnInit } from '@angular/core';
import { Sign, PhoneSign, EmailSign } from './sign.model';


@Component({
  moduleId: module.id,
  selector: 'signs-list',
  templateUrl: 'signs.component.html',
  styleUrls:  ['signs.component.css']
})

export class SignsComponent implements OnInit {
  @Input() signs: Sign[];
}
