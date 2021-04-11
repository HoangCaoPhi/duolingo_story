import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointToPhraseComponent } from './point-to-phrase.component';

describe('PointToPhraseComponent', () => {
  let component: PointToPhraseComponent;
  let fixture: ComponentFixture<PointToPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointToPhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointToPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
