import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <signpost-navbar></signpost-navbar>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {}
