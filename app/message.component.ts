import { Component, Input } from '@angular/core';
@Component({
  selector: 'message-input',
  template: `
    <div>
      <ul class="input-list style-1 clearfix">
      <li>
        <input type="text" [(ngModel)]="subject" placeholder="Subject" class="focus"/>
      </li>
      <li>
        <textarea rows="20" [(ngModel)]="message" placeholder="Message body" class="focus"></textarea>
      </li>
      <!--
      Enter Message Subject: <input id="subject" type="text" size="80" required="" pattern="^(?!\s*$).+" onkeyup="validateEmail()"><br>
      Enter Message Body:<br>
      <textarea id="emailBody" required="" pattern="^(?!\s*$).+" onkeyup="validateEmail()" rows="20" cols="80"></textarea><br>
      -->
      </ul>
    </div>
    `
})
export class MessageComponent {
  @Input()
  subject = 'Subject From Variable';
  message = 'Merry Christmas Folks!';
}
