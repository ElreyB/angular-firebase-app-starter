import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2/index';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { Course } from './course';
@Injectable()
export class CoursesService {
  constructor(private angularFire: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]> {
    return this.angularFire.list('courses').map(Course.fromJsonArray);
  }

  findLessonsForCourse(courseUrl: string) {
    console.log(courseUrl);
  }
}
