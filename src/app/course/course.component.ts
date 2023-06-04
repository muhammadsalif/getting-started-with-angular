import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  title = 'This is title of app';
  courses = ['course1', 'course2', 'course3'];
}
