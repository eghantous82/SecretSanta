import { Component, Output } from '@angular/core';
import { ParticipantsService } from './participants.service';
import { Participant } from './participants.service';

@Component({
  template: `
    <ul class="input-list style-1">
      <li *ngFor="let el of participantsService.getParticipants(); let i = index">
        <input [ngClass]="getNameClasses(i)" type="text" placeholder="Name" [(ngModel)]="el.name" style="width: 50%; margin-right: 5px" spellcheck="false"/>
        <input [ngClass]="getEmailClasses(i)" type="text" placeholder="Email" [(ngModel)]="el.email" style="width: 50%; margin-left: 5px" spellcheck="false"/>
        <a (click)="remove(i)"><img src="/assets/img/deleteParticipant.png" height="40" width="40" [ngStyle]="{'cursor': el.pointer, 'opacity': el.opacity}"/></a>
        <a (click)="onExListClicked(i)"><img src="/assets/img/exList.png" height="40" width="40" [ngStyle]="{'cursor': 'pointer'}"/></a>
      </li>
      <a class="myButton" (click)="add()">Add</a>
      <exlist-dialog [(visible)]="showDialog" [participant]="selectedParticipant" [selectedIndex]="selectedIndex">
      </exlist-dialog>
    </ul>
    `
})
export class ParticipantsComponent
{

  @Output()
  selectedParticipant: Participant;

  @Output()
  selectedIndex: number;

  showDialog = false;

  constructor(private participantsService: ParticipantsService) { }

  add() : void
  {
    this.participantsService.add();
  }

  remove(index: number) : void
  {
    this.participantsService.remove(index);
  }

  getNameClasses(index: number)
  {
    let p: Participant = this.participantsService.get(index);
    let classes = {
      "red-border": !p.hasValidName()
    };
    return classes;
  }

  getEmailClasses(index: number)
  {
    let p: Participant = this.participantsService.get(index);
    let classes = {
      "red-border": !p.hasValidEmail()
    };
    return classes;
  }

  onExListClicked(index: number)
  {
    if(!this.participantsService.isValid())
    {
      alert("Please correct form errors");
    }
    else
    {
      this.selectedIndex = index;
      this.selectedParticipant = this.participantsService.get(index); 
      this.showDialog = !this.showDialog;
    }
  }

}
