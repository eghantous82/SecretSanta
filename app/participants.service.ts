import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService
{

  list: Participant[] = [];

  constructor()
  {
    let p1: Participant = new Participant("", "", false);
    let p2: Participant = new Participant("", "", false);
    let p3: Participant = new Participant("", "", false);
    this.list.push(p1);
    this.list.push(p2);
    this.list.push(p3);
  }
  getParticipants() : Participant[]
  {
    return this.list;
  }

  add()
  {
    let p: Participant = new Participant("", "", true);
    this.list.push(p);
  }

  remove(index: number)
  {
    if(this.get(index).getAllowRemove())
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
    if(this.list.length < 3)
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
  private allowRemove: boolean = false;
  private pointer: string = "pointer";
  private opacity: number = 1;

  constructor(name: string, email: string, allowRemove: boolean)
  {
    this.name = name;
    this.email = email;
    this.allowRemove = allowRemove;
    if(!this.allowRemove)
    {
      this.pointer = "";
      this.opacity = 0.4;
    }
  }

  getAllowRemove() : boolean
  {
    return this.allowRemove;
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

  private validateStringLength(str: string) : boolean
  {
    return str.trim().length !== 0;
  }

}
