import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService
{

  list: Participant[] = [new Participant("JCole", "JCole@gmail.com"), new Participant("Future", "future@gmail.com")];

  getParticipants() : Promise<Participant[]>
  {
    return Promise.resolve(this.list);
  }

  add()
  {
    this.list.push(new Participant("",""));
  }

  remove(index: number)
  {
    this.list.splice(index, 1);
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
