import { Component, OnInit } from '@angular/core';
import { Student } from '../entity/student';
import { StudentDataImplService } from '../service/student-data-impl.service';
import { StudentService } from '../service/student-service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];

  averageGpa(): number {
    let sum = 0;
    for (let student of this.students) {
      sum += student.gpa;
    }
    return sum / this.students.length;

  }

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      students => {
        this.students = students;
      }
    );
  }

}
