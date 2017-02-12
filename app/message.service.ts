import { Injectable } from '@angular/core';

@Injectable()
export class MessageService
{

  message: string = "Merry Christmas All!\nThis message is to tell your that your part of a Shhhhhecret Santa.\nYou'll be buying a gift for ";
  subject: string = "Secret Santa " + (new Date().getFullYear());

  getMessage() : string
  {
    return this.message;
  }

  getSubject() : string
  {
    return this.subject;
  }

  setMessage(message: string) : void
  {
    this.message = message;
  }

  setSubject(subject: string) : void
  {
    this.subject = subject;
  }

  isValid() : boolean
  {
    if(!this.isValidMessage() || !this.isValidSubject())
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  isValidSubject() : boolean
  {
    return this.subject.trim().length != 0;
  }

  isValidMessage() : boolean
  {
    return this.message.trim().length != 0;
  }

}
