import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../shared/model/courses.service';
import { Lesson } from '../shared/model/lesson';
import { Course } from '../shared/model/course';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseDetailComponent implements OnInit {
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    const courseUrl = this.route.snapshot.params['id'];

    this.course$ = this.coursesService.findCourseByUrl(courseUrl);
    this.lessons$ = this.coursesService.loadFirstLessonsPage(courseUrl, 3);
  }
}
