import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Lesson } from './lesson';
import { AngularFireModule } from 'angularfire2/index';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';

@Injectable()
export class LessonsService {
  constructor(private angularFire: AngularFireDatabase) {}

  findAllLessons(): Observable<Lesson[]> {
    return this.angularFire.list('lessons').map(Lesson.fromJsonList);
  }

  findLessonByUrl(url: string): Observable<Lesson> {
    return this.angularFire
      .list('lessons', {
        query: {
          orderByChild: 'url',
          equalTo: url
        }
      })
      .filter(results => results && Object.keys(results).length > 0)
      .map(results => Lesson.fromJson(results[0]));
  }
}
