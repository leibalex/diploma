import { TestBed, inject } from '@angular/core/testing';

import { StateManagingService } from './state-managing.service';

describe('StateManagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateManagingService]
    });
  });

  it('should be created', inject([StateManagingService], (service: StateManagingService) => {
    expect(service).toBeTruthy();
  }));
});
