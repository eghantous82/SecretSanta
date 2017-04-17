import { Component } from '@angular/core';
import { ParticipantsService } from './participants.service';
import { MessageService } from './message.service';
import '../assets/css/styles.css'
import '../assets/font-awesome/css/font-awesome.css'

@Component({
  selector: 'myapp',
  templateUrl: 'app.component.html'
})
export class AppComponent
{
  constructor( public messageService: MessageService,
               public participantsService: ParticipantsService )
  {

  }
}
