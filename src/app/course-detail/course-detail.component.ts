import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../shared/model/courses.service';
import { Lesson } from '../shared/model/lesson';
import { Observable } from 'rxjs/Rx'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseDetailComponent implements OnInit {
  lessons$: Observable<Lesson[]>
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) {

  }

  ngOnInit() {
    const courseUrl = this.route.snapshot.params['id'];
    this.coursesService.findCourseByUrl(courseUrl);
  }

}
