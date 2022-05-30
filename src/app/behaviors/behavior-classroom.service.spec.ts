import { TestBed } from '@angular/core/testing';

import { BehaviorClassroomService } from './behavior-classroom.service';

describe('BehaviorClassroomService', () => {
  let service: BehaviorClassroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorClassroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
