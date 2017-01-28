import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ParticipantsService } from './participants.service'

@Component({
  template: `
    <div>
      <ul class="input-list style-1">
        <li>
          <input type="text" [(ngModel)]="subject" placeholder="Subject" class="focus" (keyup)="onKey($event)"/>
        </li>
        <li>
          <textarea rows="20" [(ngModel)]="message" placeholder="Message body" class="focus" (keyup)="onKey($event)"></textarea>
        </li>
        <a [ngClass]="getSendClass()">Send</a>
        <!--
        Enter Message Subject: <input id="subject" type="text" size="80" required="" pattern="^(?!\s*$).+" onkeyup="validateEmail()"><br>
        Enter Message Body:<br>
        <textarea id="emailBody" required="" pattern="^(?!\s*$).+" onkeyup="validateEmail()" rows="20" cols="80"></textarea><br>
        -->
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
               private participantsService: ParticipantsService ) { }

  onKey(KeyboardEvent: any) {
    var tmpMessage = this.message.trim();
    var tmpSub = this.message.trim();
    this.messageService.setMessage(this.message);
    this.messageService.setSubject(this.subject);
  }

  isDataValid() : boolean
  {
    if(!this.participantsService.isValid())
    {
      return false;
    }

    if(this.message.length === 0 || this.subject.length === 0)
    {
      return false;
    }

    return true;

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

  ngOnInit() : void
  {
    this.message = this.messageService.getMessage();
    this.subject = this.messageService.getSubject();
  }
}
