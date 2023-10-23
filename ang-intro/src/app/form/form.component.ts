import { Component } from '@angular/core';

import { MainService } from '../services/main.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  title: string = 'Form Component'

  name: string;
  email: string;
  message: string;
  isSubmitted: boolean = false;
  messages: Array<any> = []

  // Property Injection
  // private service: MainService =  inject(MainService)

  constructor(private service: MainService) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit(): void {
    // console.log(this.name);
    this.isSubmitted = true

    this.service.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    })

    // console.log(this.messages);
    
  }

  deleteMessage(index: number): void {
    this.service.deleteMessage(index)
  }
}
