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
  allLessons: Lesson[];
  filtered: Lesson[];
  constructor(private lessonservice: LessonsService) {}

  ngOnInit() {
    this.lessonservice
      .findAllLessons()
      .do(console.log)
      .subscribe(lessons => (this.allLessons = this.filtered = lessons));
  }

  search(search: string) {
    this.filtered = this.allLessons.filter(lesson =>
      lesson.description.includes(search)
    );
  }
}
