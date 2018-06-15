import { TestBed, inject } from '@angular/core/testing';

import { PaginateMakerService } from './paginate-maker.service';

describe('paginateMakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginateMakerService]
    });
  });

  it('should be created', inject([PaginateMakerService], (service: PaginateMakerService) => {
    expect(service).toBeTruthy();
  }));
});
