// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components for routing to
import { NavbarComponent }           from './shared/navigation/navbar/navbar.component';
import { LivingStyleGuideComponent } from './styleguide/livingstyleguide.component';
import { SearchBoxComponent }        from './shared/search/search-box/search-box.component';

// App Routes
const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: SearchBoxComponent, pathMatch: 'full' },
  { path: 'styleguide', component: LivingStyleGuideComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
