import { Component, Input } from '@angular/core';
import { HelpersService } from '../../shared/helpers/helpers.service';
import { User } from '../user.model';

@Component({
  moduleId: module.id,
  selector: 'user-sign',
  templateUrl: 'user-sign.component.html',
  styleUrls:  ['user-sign.component.css']
})

export class UserSignComponent {
  @Input() user: User;

  constructor( private helpers: HelpersService) {}
}
