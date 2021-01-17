import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTranslateComponent } from './content-translate.component';

describe('ContentTranslateComponent', () => {
  let component: ContentTranslateComponent;
  let fixture: ComponentFixture<ContentTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
