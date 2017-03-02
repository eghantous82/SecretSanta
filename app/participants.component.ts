import { Component, Output } from '@angular/core';
import { ParticipantsService } from './participants.service';
import { Participant } from './participants.service';

@Component({
  styleUrls: ['assets/css/participants.component.css'],
  template: `
    <ul class="input-list style-1">
      <li *ngFor="let el of participantsService.getParticipants(); let i = index">
        <input [ngClass]="{'red-border': !el.hasValidName()}" type="text" placeholder="Name" [(ngModel)]="el.name"
        style="width: 50%; margin-right: 5px" spellcheck="false"/>
        <input [ngClass]="{'red-border': !el.hasValidEmail()}" type="text" placeholder="Email" [(ngModel)]="el.email"
        style="width: 50%; margin-left: 5px" spellcheck="false"/>
        <a (click)="remove(i)" [ngClass]="{'click-enabled': allowRemove(), 'click-disabled': !allowRemove()}"
        style="padding-right: 3px; padding-left: 3px">
          <i class="fa fa-trash-o fa-3x" aria-hidden="true" [ngClass]="{'disabled': !allowRemove(), 'enabled': allowRemove()}"></i>
        </a>
        <a (click)="onExListClicked(i)"
        [ngClass]="{'click-enabled': participantsService.isValid(), 'click-disabled': !participantsService.isValid()}">
          <i class="fa fa-ban fa-3x" aria-hidden="true"
          [ngClass]="{'disabled': !participantsService.isValid(), 'enabled': participantsService.isValid()}"></i>
        </a>
      </li>
      <a class="myButton" (click)="add()">Add</a>
      <exlist-dialog [(visible)]="showDialog" [participant]="selectedParticipant">
      </exlist-dialog>
    </ul>
    `
})
export class ParticipantsComponent
{

  @Output()
  selectedParticipant: Participant;

  showDialog = false;

  constructor(private participantsService: ParticipantsService) { }

  add(): void
  {
    this.participantsService.add();
  }

  remove(index: number): void
  {
    this.participantsService.remove(index);
  }

  allowRemove(): boolean
  {
    return this.participantsService.hasEnoughParticipants();
  }

  onExListClicked(index: number)
  {
    if (!this.participantsService.isValid())
    {
      alert('Please correct form errors');
    }
    else
    {
      this.selectedParticipant = this.participantsService.get(index);
      this.showDialog = !this.showDialog;
    }
  }

}
