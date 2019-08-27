import { Observable } from "../../../node_modules/rxjs";
import { Student } from "../entity/student";

export abstract class StudentService {
     abstract getStudents(): Observable<Student[]>;
}
