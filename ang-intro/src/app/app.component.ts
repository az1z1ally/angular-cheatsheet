import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'ang-intro';
  parentMessage: string = 'Message from parent component';
  
  message: string;

  fromChildOutput: string

  @ViewChild(PostComponent) childComp: PostComponent;

  constructor() {
    // console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    // console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }

  receiveMessage($event: string) {
    // console.log($event);
    this.fromChildOutput = $event
    
  }
}
