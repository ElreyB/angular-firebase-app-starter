import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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
    return this.angularFire.list('lessons');
  }
}
