import { TestBed } from '@angular/core/testing';

import { ItemimporterService } from './itemimporter.service';

describe('ItemimporterService', () => {
  let service: ItemimporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemimporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
