import { Component, Input } from '@angular/core';
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
  @Input()
  message = 'Merry Christmas Folks!';
  startButtonStyle = "myButton";

  onKey(KeyboardEvent: any) {
    var tmpMessage = this.message.trim();
    var tmpSub = this.message.trim();
    this.startButtonStyle = tmpMessage.length === 0 || tmpSub.length === 0 ? "myButtonDeactivated" : "myButton";
  }
}
