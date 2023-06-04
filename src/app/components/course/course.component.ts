import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  title = 'This is title of app';
  courses;
  constructor(courseService: CoursesService) {
    this.courses = courseService.getCourses();
  }
}
