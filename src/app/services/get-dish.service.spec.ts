import { TestBed, inject } from '@angular/core/testing';

import { GetDishService } from './get-dish.service';

describe('GetDishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDishService]
    });
  });

  it('should ...', inject([GetDishService], (service: GetDishService) => {
    expect(service).toBeTruthy();
  }));
});
