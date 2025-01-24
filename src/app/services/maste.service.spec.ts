import { TestBed } from '@angular/core/testing';

import { MasteService } from './maste.service';

describe('MasteService', () => {
  let service: MasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
