import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesDetailComponent } from './stories-detail.component';

describe('StoriesDetailComponent', () => {
  let component: StoriesDetailComponent;
  let fixture: ComponentFixture<StoriesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
