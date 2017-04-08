import { Injectable } from '@angular/core';
import { ParticipantsService } from './participants.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MessageService
{

  message: string = 'Merry Christmas All!\nThis message is to tell your that your part of a Shhhhhecret Santa.\
  \nYou\'ll be buying a gift for ';
  subject: string = 'Secret Santa ' + (new Date().getFullYear());

  constructor(private participantsService: ParticipantsService,
              private http: Http) { }

  getMessage(): string
  {
    return this.message;
  }

  getSubject(): string
  {
    return this.subject;
  }

  setMessage(message: string): void
  {
    this.message = message;
  }

  setSubject(subject: string): void
  {
    this.subject = subject;
  }

  isValid(): boolean
  {
    if (!this.isValidMessage() || !this.isValidSubject())
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  isValidSubject(): boolean
  {
    return this.subject.trim().length !== 0;
  }

  isValidMessage(): boolean
  {
    return this.message.trim().length !== 0;
  }

  send(): Observable<Response>
  {
    let request = JSON.stringify({
      message: this.message,
      subject: this.subject,
      participants: this.participantsService.getParticipants()
    });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let observable = this.http.post('app/sendmessage', {request}, options);
    observable.map(this.extractData);
    observable.catch(this.handleError);
    return observable;
  }

  private extractData(res: Response): void
  {
    // Depending on what the response is, update the page
  }

  private handleError (error: Response | any)
  {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
