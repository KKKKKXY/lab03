import { TestBed, inject } from '@angular/core/testing';

import { StudentDataImplService } from './student-data-impl.service';

describe('StudentDataImplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentDataImplService]
    });
  });

  it('should be created', inject([StudentDataImplService], (service: StudentDataImplService) => {
    expect(service).toBeTruthy();
  }));
});
