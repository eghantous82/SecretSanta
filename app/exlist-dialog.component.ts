import { 
  Component, Input, Output, OnChanges, EventEmitter, 
  trigger, state, style, animate, transition } from '@angular/core';
import { ParticipantsService } from './participants.service';
import { Participant } from './participants.service';


@Component({
  selector: 'exlist-dialog',
  templateUrl: 'app/exlist-dialog.component.html',
  styleUrls: ['assets/css/exlist-dialog.component.css'],
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
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private participantsService: ParticipantsService) { }

  getExcludableParticipants() : Participant[]
  {
    let ret_value: Participant[] = [];
    ret_value = this.participantsService.getParticipants().filter(value => this.participant.getId() != value.getId())
    return ret_value;
  }

  close() {
    // need to extract who's been excluded
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
