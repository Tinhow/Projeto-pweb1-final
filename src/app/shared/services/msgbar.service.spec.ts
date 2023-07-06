import { TestBed } from '@angular/core/testing';

import { MsgbarService } from './msgbar.service';

describe('MsgbarService', () => {
  let service: MsgbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
