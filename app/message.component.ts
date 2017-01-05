import { Component, Input } from '@angular/core';
@Component({
  selector: 'message-input',
  template: `
    <div>
      <ul class="input-list style-1 clearfix">
      <li>
        <input type="text" [(ngModel)]="subject" placeholder="Subject" class="focus" (keyup)="onKey($event)"/>
      </li>
      <li>
        <textarea rows="20" [(ngModel)]="message" placeholder="Message body" class="focus" (keyup)="onKey($event)"></textarea>
      </li>
      <li>
        <table class="middlecontent">
          <td>
            <a class="myButton">Participants</a>
          </td>
          <td>
            <a [ngClass]="startButtonStyle">Start</a>
          </td>
        </table>
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
    this.message = this.message.trim();
    this.subject = this.subject.trim();
    this.startButtonStyle = this.message.length === 0 || this.subject.length === 0 ? "myButtonDeactivated" : "myButton";
  }
}
