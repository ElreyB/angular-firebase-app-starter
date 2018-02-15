import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFireModule } from 'angularfire2/index';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Introduction to AngularFire';

  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;

  firstCourse: any;

  constructor(private angularFire: AngularFireDatabase) {
    this.courses$ = angularFire.list('courses');
    this.courses$.subscribe(console.log);
    this.lesson$ = angularFire.object('lessons/--L5F0m3wdqz1uKbd9ZFe');
    this.lesson$.subscribe(console.log);
    this.courses$
      .map(courses => courses[courses.length - 1])
      .subscribe(course => (this.firstCourse = course));
  }

  listPush() {
    this.courses$
      .push({ description: 'test courses' })
      .then(() => console.log('List Push Done'), console.error);
  }

  listRemove() {
    this.courses$.remove(this.firstCourse);
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, {
      description: 'Angular 2 HTTP Modified'
    });
  }

  objUpdate() {
    this.lesson$.update({ description: 'New Description' });
  }

  objSet() {
    this.lesson$.set({ description: 'New Description' });
  }

  objRemove() {
    this.lesson$.remove();
  }
}
