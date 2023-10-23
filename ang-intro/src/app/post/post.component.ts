import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  title: string = "List of Posts";
  messagePost: string = "Message Post";

  postParentMessage: string = 'Message coming from the post parent';

  childMessage: string = 'From Child Component';

  outputChildMessage: string = 'Message From Child Component Via Output';

  @Input() fromParent: string;

  @Output() messageEvent = new EventEmitter<string>()

  sendMessage() {
    // console.log('Cliked!');
    this.messageEvent.emit(this.outputChildMessage)
  }
}
