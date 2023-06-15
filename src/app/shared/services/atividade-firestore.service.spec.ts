import { TestBed } from '@angular/core/testing';

import { AtividadeFirestoreService } from './atividade-firestore.service';

describe('AtividadeFirestoreService', () => {
  let service: AtividadeFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtividadeFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
