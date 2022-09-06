import { TestBed } from '@angular/core/testing';

import { ApiformethodsService } from './apiformethods.service';

describe('ApiformethodsService', () => {
  let service: ApiformethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiformethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
