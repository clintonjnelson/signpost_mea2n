import { Component, OnInit } from '@angular/core';
import { UserSettings } from "../user.model";
import { HelpersService } from '../../shared/helpers/helpers.service';

@Component({
  moduleId: module.id,
  selector: 'user-settings',
  templateUrl: 'user-settings.component.html',
  styleUrls:  ['user-settings.component.css']
})

export class UserSettingsComponent implements OnInit {
  userSettings: UserSettings;

  constructor(private helpers: HelpersService) {}

  ngOnInit() {
    // GET THE USER SETTINGS FROM API. IF ALREADY HAVE, THEN REMOVE NG_ON_INIT
    this.userSettings = {picUrl: '', username: 'adminuser', email: 'admin@example.com'};
  }

}
