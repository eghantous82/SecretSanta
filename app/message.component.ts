import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ParticipantsService } from './participants.service';

@Component({
  template: `
    <div>
      <ul class="input-list style-1">
        <li>
          <input type="text" [ngClass]="{'red-border': !messageService.isValidSubject()}"
          [(ngModel)]="subject" placeholder="Subject" (keyup)="onKey($event)"/>
        </li>
        <li>
          <textarea rows="20" [ngClass]="{'red-border': !this.messageService.isValidMessage()}"
          [(ngModel)]="message" placeholder="Message body" (keyup)="onKey($event)"></textarea>
        </li>
        <a [ngClass]="{myButtonDeactivated: !isDataValid(), myButton: isDataValid()}" (click)="send()">Send</a>
      </ul>
    </div>
    `
})
export class MessageComponent implements OnInit
{

  @Input()
  subject = 'Subject From Variable';
  @Input()
  message = 'Merry Christmas Folks!';


  constructor( private messageService: MessageService,
               private participantsService: ParticipantsService )
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
