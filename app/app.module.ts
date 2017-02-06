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
import { SearchBoxComponent }          from './shared/search/search-box/search-box.component';
import { SearchResultsComponent}       from './shared/search/search-results/search-results.component';
import { NavbarComponent }             from './shared/navigation/navbar/navbar.component';
import { NavLinkComponent }            from './shared/navigation/navlink/navlink.component';
import { SidenavComponent }            from './shared/navigation/sidenav/sidenav.component';
import { IconLinkComponent }           from './shared/icon-links/icon-links.component';
import { LoginSignupFormComponent }    from './shared/forms/login-signup-form/login-signup-form.component';
import { LivingStyleGuideComponent }   from './styleguide/livingstyleguide.component';
import { UserSignComponent }           from './users/user-sign/user-sign.component';
import { SignComponent }               from './signs/sign/sign.component';
import { SignContentComponent }        from './signs/sign/sign-content/sign-content.component';
import { DefaultSignContentComponent } from './signs/sign/sign-content/default/default-sign-content.component';
import { CustomSignContentComponent }  from './signs/sign/sign-content/custom/custom-sign-content.component';
import { PhoneSignContentComponent }   from './signs/sign/sign-content/phone/phone-sign-content.component';
import { EmailSignContentComponent }   from './signs/sign/sign-content/email/email-sign-content.component';

// Directives
import { HoverColorDirective } from './shared/hover-color/hover-color.directive';
import { HoverBackgroundDirective } from './shared/hover-background/hover-background.component';

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
                  NavLinkComponent,
                  LoginSignupFormComponent,
                  SidenavComponent,
                  IconLinkComponent,
                  LivingStyleGuideComponent,
                  UserSignComponent,
                  SignComponent,
                  SignContentComponent,        // Superclass
                  DefaultSignContentComponent,
                  CustomSignContentComponent,
                  PhoneSignContentComponent,
                  EmailSignContentComponent,

                  HoverColorDirective,
                  HoverBackgroundDirective,
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
