import { TestBed, inject } from '@angular/core/testing';

import { AddDishService } from './add-dish.service';

describe('AddDishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddDishService]
    });
  });

  it('should ...', inject([AddDishService], (service: AddDishService) => {
    expect(service).toBeTruthy();
  }));
});
