import { TestBed, inject } from '@angular/core/testing';

import { GetDishListService } from './get-dish-list.service';

describe('GetDishListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDishListService]
    });
  });

  it('should ...', inject([GetDishListService], (service: GetDishListService) => {
    expect(service).toBeTruthy();
  }));
});
