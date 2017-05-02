/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimeService } from './time.service';

describe('TimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeService]
    });
  });

  it('should ...', inject([TimeService], (service: TimeService) => {
    expect(service).toBeTruthy();
  }));
});
