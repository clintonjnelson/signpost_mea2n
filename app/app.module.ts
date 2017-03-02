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
import { AppComponent }                from './app.component';
import { LivingStyleGuideComponent }   from './styleguide/livingstyleguide.component';

import { IconLinkComponent }           from './shared/icon-links/icon-links.component';

import { NavbarComponent }             from './navigation/navbar/navbar.component';
import { NavLinkComponent }            from './navigation/navlink/navlink.component';

import { SearchBoxComponent }          from './search/search-box/search-box.component';
import { SearchResultsComponent}       from './search/search-results/search-results.component';

import { SignComponent }               from './signs/sign/sign.component';
import { SignsComponent }              from './signs/signs.component';
import { SignContentComponent }        from './signs/sign/sign-content/sign-content.component';
import { OauthSignContentComponent }   from './signs/sign/sign-content/oauth/oauth-sign-content.component';
import { CustomSignContentComponent }  from './signs/sign/sign-content/custom/custom-sign-content.component';
import { GenericSignContentComponent } from './signs/sign/sign-content/generic/generic-sign-content.component';
import { AddSignComponent }            from './signs/add-sign/add-sign.component';

import { LoginSignupFormComponent }    from './users/login-signup-form/login-signup-form.component';
import { UserSignComponent }           from './users/user-sign/user-sign.component';
import { UserPageComponent }           from './users/user-page.component';
import { UserSettingsComponent }       from './users/settings/user-settings.component';

import { RequestPasswordResetComponent } from './password-reset/request-password-reset.component';
import { PasswordResetComponent }       from './password-reset/password-reset.component';

import { NotificationsComponent }      from './notifications/notifications.component';
import { ConfirmModalComponent }       from './signs/confirm-modal/confirm-modal.component';

// Directives
import { HoverColorDirective }      from './shared/hover-color/hover-color.directive';
import { HoverBackgroundDirective } from './shared/hover-background/hover-background.component';
import { UniqueValidatorDirective } from './shared/validators/unique.directive';

// Services - make them available EVERYWHERE (otherwise, just add it specifically into Component as a provider)
import { HelpersService }      from './shared/helpers/helpers.service';
import { AuthService }         from './core/services/auth.service';
import { NotificationService } from './core/services/notification.service';
import { ModalService }        from './core/services/modal.service';

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
                  IconLinkComponent,
                  LivingStyleGuideComponent,
                  SignComponent,
                  SignsComponent,
                  SignContentComponent,        // Superclass
                  OauthSignContentComponent,
                  CustomSignContentComponent,
                  GenericSignContentComponent,
                  AddSignComponent,

                  UserSignComponent,
                  UserPageComponent,
                  UserSettingsComponent,

                  RequestPasswordResetComponent,
                  PasswordResetComponent,

                  NotificationsComponent,
                  ConfirmModalComponent,

                  HoverColorDirective,
                  HoverBackgroundDirective,
                  UniqueValidatorDirective,
                ],
  bootstrap:    [
                  AppComponent,
                ],
  providers:    [
                  AuthService,
                  HelpersService,
                  NotificationService,
                  ModalService,
                ],
  entryComponents: [
                  ConfirmModalComponent,
  ]
})
export class AppModule { }
