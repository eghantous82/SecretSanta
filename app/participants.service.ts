import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService
{

  list: Participant[] = [new Participant("", "")];

  getParticipants() : Participant[]
  {
    return this.list;
  }

  add()
  {
    this.list.push(new Participant("",""));
  }

  remove(index: number)
  {
    this.list.splice(index, 1);
  }

  get(index: number) : Participant
  {
    return this.list[index];
  }

  isValid() : boolean
  {
    if(this.list.length < 3)
    {
      return false;
    }
    return true;
  }

}

export class Participant
{

  name = "";
  email = "";

  constructor(name: string, email: string)
  {
    this.name = name;
    this.email = email;
  }
}
