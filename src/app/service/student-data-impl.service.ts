import { Injectable } from '@angular/core';
import { StudentService } from './student-service';
import { Observable, of } from 'rxjs';
import { Student } from '../entity/student';
@Injectable({
  providedIn: 'root'
})
export class StudentDataImplService extends StudentService {

  constructor() {
    super();
  }
  getStudents(): Observable<Student[]> {
    return of(this.students);
  };

  students: Student[] = [{
    id: 1,
    studentId: '562110507',
    name: 'Prayuth',
    surname: 'Tu',
    gpa: 4.00
  }, {
    id: 2,
    studentId: '562110509',
    name: 'Pu',
    surname: 'Priya',
    gpa: 2.12,

  }];
}
