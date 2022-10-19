import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAndAnswerListComponent } from './question-and-answer-list.component';

describe('QuestionAndAnswerListComponent', () => {
  let component: QuestionAndAnswerListComponent;
  let fixture: ComponentFixture<QuestionAndAnswerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAndAnswerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAndAnswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
