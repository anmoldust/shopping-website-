import { TestBed } from '@angular/core/testing';

import { MethodimporterService } from './methodimporter.service';

describe('MethodimporterService', () => {
  let service: MethodimporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodimporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
