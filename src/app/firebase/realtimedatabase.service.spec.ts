import { TestBed } from '@angular/core/testing';

import { RealtimeDatabaseService } from './realtimedatabase.service';

describe('RealtimedatabaseService', () => {
  let service: RealtimeDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtimeDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
