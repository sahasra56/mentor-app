import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAndAnswerDetailsComponent } from './question-and-answer-details.component';

describe('QuestionAndAnswerDetailsComponent', () => {
  let component: QuestionAndAnswerDetailsComponent;
  let fixture: ComponentFixture<QuestionAndAnswerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAndAnswerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAndAnswerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
