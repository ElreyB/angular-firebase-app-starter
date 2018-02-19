import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LessonsListComponent implements OnInit {
  @Input() lessons: Lesson[];
  constructor() {}

  ngOnInit() {}
}
