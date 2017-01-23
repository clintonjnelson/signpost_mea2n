//// This file exists to establish key facts about the ENTIRE app
// Modules
// import 'hammerjs';
import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { RouterModule }    from '@angular/router';
import { AppRouterModule } from './app-routing.module';
import { FormsModule }     from '@angular/forms'
import { MaterialModule }  from '@angular/material';

// Components
import { AppComponent }             from './app.component';
import { SearchBoxComponent }       from './shared/search/search-box/search-box.component';
import { SearchResultsComponent}    from './shared/search/search-results/search-results.component';
import { NavbarComponent }          from './shared/navigation/navbar/navbar.component';
import { NavLinkComponent }         from './shared/navigation/navlink/navlink.component';
import { SidenavComponent }         from './shared/navigation/sidenav/sidenav.component';
import { LoginSignupFormComponent } from './shared/forms/login-signup-form/login-signup-form.component';
import { LivingStyleGuideComponent } from './styleguide/livingstyleguide.component';


// Services


@NgModule({
  imports:      [
                  BrowserModule,
                  AppRouterModule,
                  FormsModule,
                  MaterialModule.forRoot(),
                ],
  declarations: [
                  AppComponent,
                  NavbarComponent,
                  SearchBoxComponent,
                  SearchResultsComponent,
                  NavLinkComponent,
                  LoginSignupFormComponent,
                  SidenavComponent,
                  LivingStyleGuideComponent,

                ],
  bootstrap:    [
                  AppComponent
                ]
})
export class AppModule { }
