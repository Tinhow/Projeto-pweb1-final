import { TestBed } from '@angular/core/testing';

import { MessweatService } from './messweat.service';

describe('MessweatService', () => {
  let service: MessweatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessweatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
