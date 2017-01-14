import { Component } from '@angular/core';

@Component({
  template: `
    <ul class="input-list style-1">
      <!--
          <input class="style-1" type="text" placeholder="Name" style="width: 50%; margin-right: 5px"/>
          <input class="style-1" type="text" placeholder="Email" style="width: 50%; margin-left: 5px"/>
      -->
        <li *ngFor="let el of list">
          <input class="style-1" type="text" placeholder="Name" [(ngModel)]="el.name" style="width: 50%; margin-right: 5px"/>
          <input class="style-1" type="text" placeholder="Email" [(ngModel)]="el.email" style="width: 50%; margin-left: 5px"/>
        </li>
      <a class="myButton">Add</a>
    </ul>
    `
})
export class ParticipantsComponent {
  list: Participant[] = [new Participant("JCole", "JCole@gmail.com"), new Participant("Future", "future@gmail.com")];
}

class Participant{
  name = "";
  email = "";

  constructor(name: string, email: string)
  {
    this.name = name;
    this.email = email;
  }
}

