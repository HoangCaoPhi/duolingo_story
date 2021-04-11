import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplChoiceComponent } from './multipl-choice.component';

describe('MultiplChoiceComponent', () => {
  let component: MultiplChoiceComponent;
  let fixture: ComponentFixture<MultiplChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
