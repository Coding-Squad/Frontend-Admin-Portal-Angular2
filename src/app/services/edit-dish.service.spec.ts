import { TestBed, inject } from '@angular/core/testing';

import { EditDishService } from './edit-dish.service';

describe('EditDishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditDishService]
    });
  });

  it('should ...', inject([EditDishService], (service: EditDishService) => {
    expect(service).toBeTruthy();
  }));
});
