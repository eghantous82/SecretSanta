import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService
{
  public static MIN_NUM_PARTICIPANTS: number = 3;
  private idGenerator: number = 0;
  list: Participant[] = [];

  constructor()
  {
    this.add("Pop", "Pop@pop.com");
    this.add("Mom", "Mom@mom.com");
    this.add("Kid", "Kid@kid.com");
  }

  hasEnoughParticipants() : boolean
  {
    return this.list.length > ParticipantsService.MIN_NUM_PARTICIPANTS;
  }

  getParticipants() : Participant[]
  {
    return this.list;
  }

  add(name = "", email = "")
  {
    this.list.push( new Participant(name, email, this.idGenerator++));
  }

  remove(index: number)
  {
    if(this.hasEnoughParticipants())
    {
      let p: Array<Participant> = this.list.splice(index, 1);
    }  
  }

  get(index: number) : Participant
  {
    return this.list[index];
  }

  isValid() : boolean
  {
    if(this.list.length < ParticipantsService.MIN_NUM_PARTICIPANTS)
    {
      return false;
    }

    for(let p of this.list)
    {
      if(!p.hasValidEmail() || !p.hasValidName())
      {
        return false;
      }
    }
    return true;
  }

}

export class Participant
{
  private name: string = "";
  private email: string = "";
  private id: number;
  private exList: number[] = [];

  constructor(name: string, email: string, id: number)
  {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  getId() : number
  {
    return this.id;
  }

  hasValidName() : boolean
  {
    let valid: boolean = this.validateStringLength(this.name);
    return this.validateStringLength(this.name);
  }

  hasValidEmail(): boolean
  {
    let validEmail: boolean = this.validateStringLength(this.email);
    let emailRegEx: RegExp = new RegExp("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    validEmail = validEmail && emailRegEx.test(this.email);
    return validEmail;
  }

  updateExList(id: number, checked: boolean) : void
  {
    if(checked)
    {
      this.exList.push(id);
    }
    else
    {
      let index: number = this.exList.indexOf(id);
      this.exList.splice(index, 1);
    }
  }

  isExcluded(p: Participant) : boolean
  {
    let index = this.exList.indexOf(p.getId());
    return (index != -1);
  }

  private validateStringLength(str: string) : boolean
  {
    return str.trim().length !== 0;
  }

}
