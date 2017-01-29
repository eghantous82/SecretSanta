import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService
{

  list: Participant[] = [new Participant("", "")];
  validParticipants: boolean = true;

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
      return (this.list.length > 2 && this.validParticipants);
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
