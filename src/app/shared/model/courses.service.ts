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
import { Lesson } from './lesson';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces'

@Injectable()
export class CoursesService {
  constructor(private angularFire: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]> {
    return this.angularFire.list('courses').map(Course.fromJsonArray);
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.angularFire.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
      .map(results => results[0]);
  }

  findLessonKeysPerCourseUrl(courseUrl: string,
    query: FirebaseListFactoryOpts = {}): Observable<string[]> {
    return this.findCourseByUrl(courseUrl)
      .do(val => console.log("course", val))
      .filter(course => !!course)
      .switchMap(course => this.angularFire.list(`lessonsPerCourse/${course.$key}`, query))
      .map(lspc => lspc.map(lpc => lpc.$key));
  }
}
