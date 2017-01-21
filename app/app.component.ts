import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Secret Santa</h1>
    <nav>
      <a routerLink="/message" routerLinkActive="active">Message</a>
      <a routerLink="/participants" routerLinkActive="active">Participants</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent
{
}
