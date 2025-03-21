import { TestBed } from '@angular/core/testing';

import { LearnerLoginService } from './learner-login.service';

describe('LearnerLoginService', () => {
  let service: LearnerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
