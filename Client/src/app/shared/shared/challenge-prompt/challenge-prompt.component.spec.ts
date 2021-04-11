import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengePromptComponent } from './challenge-prompt.component';

describe('ChallengePromptComponent', () => {
  let component: ChallengePromptComponent;
  let fixture: ComponentFixture<ChallengePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengePromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
