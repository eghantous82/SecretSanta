import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from './participants.service';
import { Participant } from './participants.service';

@Component({
  template: `
    <ul class="input-list style-1">
      <li *ngFor="let el of list;  let i = index">
        <input class="style-1" type="text" placeholder="Name" [(ngModel)]="el.name" style="width: 50%; margin-right: 5px"/>
        <input class="style-1" type="text" placeholder="Email" [(ngModel)]="el.email" style="width: 50%; margin-left: 5px"/>
        <a (click)="remove(i)"><img src="/assets/img/deleteParticipant.png" height="40" width="40" style="cursor: pointer"/></a>
      </li>
      <a class="myButton" (click)="add()">Add</a>
    </ul>
    `
})
export class ParticipantsComponent implements OnInit
{

  list: Participant[];

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit() : void
  {
    this.participantsService.getParticipants().then(participants => this.list = participants);
  }

  add()
  {
    this.participantsService.add();
  }

  remove(index: number)
  {
    this.participantsService.remove(index);
  }

}
