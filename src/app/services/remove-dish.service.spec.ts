import { TestBed, inject } from '@angular/core/testing';

import { RemoveDishService } from './remove-dish.service';

describe('RemoveDishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveDishService]
    });
  });

  it('should ...', inject([RemoveDishService], (service: RemoveDishService) => {
    expect(service).toBeTruthy();
  }));
});
