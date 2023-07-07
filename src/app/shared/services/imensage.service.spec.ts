import { TestBed } from '@angular/core/testing';

import { ImensageService } from './imensage.service';

describe('ImensageService', () => {
  let service: ImensageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImensageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
