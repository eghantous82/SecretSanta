import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from './participants.service';
import { Participant } from './participants.service';

@Component({
  template: `
    <ul class="input-list style-1">
      <li *ngFor="let el of list;  let i = index">
        <input [ngClass]="getNameClasses(i)" type="text" placeholder="Name" [(ngModel)]="el.name" style="width: 50%; margin-right: 5px"/>
        <input [ngClass]="getEmailClasses(i)" type="text" placeholder="Email" [(ngModel)]="el.email" style="width: 50%; margin-left: 5px"/>
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
    this.list = this.participantsService.getParticipants();
  }

  add() : void
  {
    this.participantsService.add();
  }

  remove(index: number) : void
  {
    this.participantsService.remove(index);
  }

  private validateStringLength(str: string) : boolean
  {
    return str.trim().length !== 0;
  }

  getNameClasses(index: number)
  {
    let p: Participant = this.participantsService.get(index);
    let validData: boolean = this.validateStringLength(p.name);
    let classes = {
      "red-border": !validData
    };
    return classes;
  }

  getEmailClasses(index: number)
  {
    let p: Participant = this.participantsService.get(index);
    let validData: boolean = this.validateStringLength(p.email);
    let emailRegEx: RegExp = new RegExp("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    validData = validData && emailRegEx.test(p.email);
    let classes = {
      "red-border": !validData
    };
    return classes;
  }

}
