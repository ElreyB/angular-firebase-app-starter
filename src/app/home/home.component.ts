import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LessonsService } from '../shared/model/lessons.service';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  lessons: Lesson[];
  constructor(private lessonservice: LessonsService) {}

  ngOnInit() {
    this.lessonservice
      .findAllLessons()
      .do(console.log)
      .subscribe(lessons => (this.lessons = lessons));
  }
}
