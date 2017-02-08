import { 
  Component, Input, Output, OnChanges, EventEmitter, 
  trigger, state, style, animate, transition } from '@angular/core';
import { ParticipantsService } from './participants.service';
import { Participant } from './participants.service';


@Component({
  selector: 'exlist-dialog',
  templateUrl: 'app/exlist-dialog.component.html',
  styleUrls: ['app/exlist-dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ExListDialogComponent
{
  @Input() visible: boolean;
  @Input() participant: Participant;
  @Input() selectedIndex: number;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private participantsService: ParticipantsService) { }

  getExcludableParticipants() : Participant[]
  {
    let ret_value: Participant[] = [];
    let size = this.participantsService.getParticipants().length;
    for(let i = 0; i < size; ++i)
    {
      if(i !== this.selectedIndex)
      {
        ret_value.push(this.participantsService.get(i));
      }
    }
    return ret_value;
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
