import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ParticipantsService } from './participants.service';

@Component({
  templateUrl: 'message.component.html'
})
export class MessageComponent implements OnInit
{

  @Input()
  subject = 'Subject From Variable';
  @Input()
  message = 'Merry Christmas Folks!';


  constructor( public messageService: MessageService,
               public participantsService: ParticipantsService )
  {
    // INTENTIONALLY LEFT BLANK
  }

  onKey(KeyboardEvent: any)
  {
    this.messageService.setMessage(this.message);
    this.messageService.setSubject(this.subject);
  }

  isDataValid(): boolean
  {
    if (!this.participantsService.isValid())
    {
      return false;
    }
    else
    {
      return this.messageService.isValid();
    }
  }

  ngOnInit(): void
  {
    this.message = this.messageService.getMessage();
    this.subject = this.messageService.getSubject();
  }

  send(): void
  {
     let response = this.messageService.send();
     response.subscribe(status_code => console.log('Status code: ' + status_code),
                        error => console.log('Error: ' + error));
  }
}
