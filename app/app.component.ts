import { Component } from '@angular/core';
import { ParticipantsService } from './participants.service'
import { MessageService } from './message.service'

@Component({
  selector: 'my-app',
  template: `
    <h1>Secret Santa</h1>
    <nav>
      <a [ngStyle]="{'color': messageService.isValid() ? 'black' : 'red'}" routerLink="/message" routerLinkActive="active">Message</a>
      <a [ngStyle]="{'color': participantsService.isValid() ? 'black' : 'red'}" routerLink="/participants" routerLinkActive="active">Participants</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent
{
  constructor( private messageService: MessageService,
               private participantsService: ParticipantsService )
  {

  }
}
