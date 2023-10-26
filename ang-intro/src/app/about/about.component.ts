import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor (private activatedRoute: ActivatedRoute) {

  }

  courseName: string;

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['course-name']);
    this.courseName = this.activatedRoute.snapshot.params['course-name'] ? this.activatedRoute.snapshot.params['course-name'] : 'Angular' ;
    // console.log(this.activatedRoute.snapshot.queryParams['course']);
    
  }
}
