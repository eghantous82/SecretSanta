import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <div class="content">
      <h1>Secret Santa</h1>
      <nav>
        <a routerLink="/message" routerLinkActive="active">Message</a>
        <a routerLink="/message" routerLinkActive="active">Participants</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {
}
