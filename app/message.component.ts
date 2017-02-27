import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ParticipantsService } from './participants.service';

@Component({
  template: `
    <div>
      <ul class="input-list style-1">
        <li>
          <input type="text" [ngClass]="getSubjectTextInputClasses()" [(ngModel)]="subject" placeholder="Subject" (keyup)="onKey($event)"/>
        </li>
        <li>
          <textarea rows="20" [ngClass]="getMessageTextInputClasses()" [(ngModel)]="message" placeholder="Message body"
          (keyup)="onKey($event)"></textarea>
        </li>
        <a [ngClass]="getSendClass()" (click)="doSend()">Send</a>
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

  getSendClass()
  {
    let validData: boolean = this.isDataValid();
    let classes = {
      myButtonDeactivated: !validData,
      myButton: validData
    };

    return classes;
  }

  getSubjectTextInputClasses()
  {
    let classes = {
      'red-border': !this.messageService.isValidSubject()
    };
    return classes;
  }

  getMessageTextInputClasses()
  {
    let classes = {
      'red-border': !this.messageService.isValidMessage()
    };
    return classes;
  }

  doSend(): void
  {
    alert('Send');
  }

  ngOnInit(): void
  {
    this.message = this.messageService.getMessage();
    this.subject = this.messageService.getSubject();
  }
}
