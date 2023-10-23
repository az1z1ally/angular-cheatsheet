import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  messages: Array<any> = [];
  
  constructor() { 
    this.init()
  }

  init(): void {
    this.insert({name:'Alby', email: 'alby@ab.com', message: 'I\'m proud of you'});
    this.insert({name:'Mamu', email: 'Mamu@jk.com', message: 'I\'m proud of you'});
    this.insert({name:'Ummy', email: 'ummy@ummy.com', message: 'I love you'});
  }

  insert(message: {name: string, email: string, message: string}): void{
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1)
  }
}
