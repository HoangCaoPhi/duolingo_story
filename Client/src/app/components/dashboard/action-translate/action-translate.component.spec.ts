import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTranslateComponent } from './action-translate.component';

describe('ActionTranslateComponent', () => {
  let component: ActionTranslateComponent;
  let fixture: ComponentFixture<ActionTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionTranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
