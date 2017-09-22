import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDishComponent } from './add-new-dish.component';

describe('AddNewDishComponent', () => {
  let component: AddNewDishComponent;
  let fixture: ComponentFixture<AddNewDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
