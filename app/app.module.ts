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
import { HamnavComponent }          from './shared/navigation/hamnav/hamnav.component';
import { NavbarComponent }          from './shared/navigation/navbar/navbar.component';
import { NavLinkComponent }         from './shared/navigation/navlink/navlink.component';
import { SidenavComponent }         from './shared/navigation/sidenav/sidenav.component';
import { IconLinkComponent }        from './shared/icon-links/icon-links.component';
import { LoginSignupFormComponent } from './shared/forms/login-signup-form/login-signup-form.component';
import { LivingStyleGuideComponent } from './styleguide/livingstyleguide.component';
import { SignComponent }            from './signs/sign/sign.component';
import { CustomSignFormComponent }  from './signs/sign/sign-form/form-types/custom/custom-sign-form.component';
import { DefaultSignFormComponent } from './signs/sign/sign-form/form-types/default/default-sign-form.component';
import { EmailSignFormComponent }   from './signs/sign/sign-form/form-types/email/email-sign-form.component';
import { PhoneSignFormComponent }   from './signs/sign/sign-form/form-types/phone/phone-sign-form.component';

// Services - make them available EVERYWHERE (otherwise, just add it specifically into Component as a provider)
import { HelpersService } from './shared/helpers/helpers.service';
import { AuthService }    from './core/services/auth.service';

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
                  HamnavComponent,
                  NavLinkComponent,
                  LoginSignupFormComponent,
                  SidenavComponent,
                  IconLinkComponent,
                  LivingStyleGuideComponent,
                  SignComponent,
                  CustomSignFormComponent,
                  DefaultSignFormComponent,
                  EmailSignFormComponent,
                  PhoneSignFormComponent,
                ],
  bootstrap:    [
                  AppComponent,
                ],
  providers:    [
                  AuthService,
                  HelpersService,
                ]
})
export class AppModule { }
