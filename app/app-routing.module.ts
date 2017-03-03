// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components for routing to
import { RequestPasswordResetComponent } from './password-reset/request-password-reset.component';
import { PasswordResetComponent }        from './password-reset/password-reset.component';
import { AdminUserManagementComponent }  from './admin/user-management/admin-user-management.component';
import { LivingStyleGuideComponent }     from './styleguide/livingstyleguide.component';
import { SearchBoxComponent }            from './search/search-box/search-box.component';
import { UserPageComponent }             from './users/user-page.component';
import { UserSettingsComponent }         from './users/settings/user-settings.component';

// App Routes
const rootRoutes: Routes = [
  { path: 'requestpasswordchange', component: RequestPasswordResetComponent, pathMatch: 'full'},
  { path: 'requestpasswordchange/change', component: PasswordResetComponent, pathMatch: 'full' },

  { path: 'admin/users', component: AdminUserManagementComponent, pathMatch: 'full' },

  { path: 'styleguide', component: LivingStyleGuideComponent, pathMatch: 'full' },

  { path: ':username/settings', component: UserSettingsComponent, pathMatch: 'full'},
  { path: ':username', component: UserPageComponent, pathMatch: 'full' },

  { path: '', component: SearchBoxComponent, pathMatch: 'full' },
  // { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(rootRoutes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
