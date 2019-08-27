import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentService } from './service/student-service';
import { StudentDataImplService } from './service/student-data-impl.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: StudentService, useClass: StudentDataImplService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
