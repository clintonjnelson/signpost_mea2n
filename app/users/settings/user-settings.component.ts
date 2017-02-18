import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { UserSettings } from "../user.model";
import { HelpersService } from '../../shared/helpers/helpers.service';

@Component({
  moduleId: module.id,
  selector: 'user-settings',
  templateUrl: 'user-settings.component.html',
  styleUrls:  ['user-settings.component.css']
})

export class UserSettingsComponent implements OnInit {
  @ViewChild('userSettingsForm') userSettingsForm: FormGroup;
  userSettings: UserSettings;
  tempSettings: UserSettings;

  constructor(private helpers: HelpersService) {}

  ngOnInit() {
    // GET THE USER SETTINGS FROM API. IF ALREADY HAVE, THEN REMOVE NG_ON_INIT
    this.userSettings = {picUrl: '', username: 'adminuser', email: 'admin@example.com'};
    this.resetSettingsCopy();
  }

  save() {
    var _this = this;
    // RUN VALIDATIONS FIRST -- SHOW ERRORS IF ANY FOUND
    // CHECK FOR INVALID USERNAME -- ALREADY TAKEN OR OTHERWISE
    // IF NO ERRORS, ATTEMPT TO SAVE THE USER SETTINGS UPDATE
    // SAVE
        // If saves, update the original AND the copy
        // If fails to save, DO NOT UPDATE ANYTHING. Allow user to fix.
    // Finally, reset the form display (turns off buttons)
    this.userSettings = Object.assign({}, _this.tempSettings);
    this.resetFormDisplay();
  }
  cancel() {
    this.resetSettingsCopy();
    this.resetFormDisplay();
  }


  // ********** CONSIDER BREAKING OUT TO A SERVICE - SIMILIAR TO SIGNS *************
  // Resets the buttons that are triggered by changes
  private resetFormDisplay() {
    var controls = this.userSettingsForm.controls;
    Object.keys(controls).forEach(control => {
      controls[control].markAsPristine();
      controls[control].markAsUntouched();
    });
  }

  private resetSettingsCopy() {
    this.tempSettings = Object.assign({}, this.userSettings);  // Make a copy
  }
}
