import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService
{

  list: Participant[] = [];

  constructor()
  {
    this.add();
  }
  getParticipants() : Participant[]
  {
    return this.list;
  }

  add()
  {
    let p: Participant = new Participant("", "");
    this.list.push(p);
  }

  remove(index: number)
  {
    let p: Array<Participant> = this.list.splice(index, 1);
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

  constructor(name: string, email: string)
  {
    this.name = name;
    this.email = email;
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
