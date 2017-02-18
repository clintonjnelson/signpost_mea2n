// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components for routing to
import { NavbarComponent }           from './shared/navigation/navbar/navbar.component';
import { LivingStyleGuideComponent } from './styleguide/livingstyleguide.component';
import { SearchBoxComponent }        from './shared/search/search-box/search-box.component';
import { SignsComponent }            from './signs/signs.component';
import { UserPageComponent }         from './users/user-page.component';
import { UserSettingsComponent }     from './users/settings/user-settings.component';

// App Routes
const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: SearchBoxComponent, pathMatch: 'full' },
  { path: 'styleguide', component: LivingStyleGuideComponent },
  { path: ':username', component: UserPageComponent },
  { path: ':username/settings', component: UserSettingsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
