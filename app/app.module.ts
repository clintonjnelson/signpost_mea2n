//// This file exists to establish key facts about the ENTIRE app
// Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { AppRouterModule } from './app-routing.module';

// Components
import { AppComponent }  from './app.component';

// Services


@NgModule({
  imports:      [
                  BrowserModule,
                  AppRouterModule
                ],
  declarations: [
                  AppComponent
                ],
  bootstrap:    [
                  AppComponent
                ]
})
export class AppModule { }
