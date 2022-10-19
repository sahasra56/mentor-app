import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionAndAnswerRoutingModule } from './question-and-answer-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { QuestionAndAnswerListComponent } from './components/question-and-answer-list/question-and-answer-list.component';
import { QuestionAndAnswerDetailsComponent } from './components/question-and-answer-details/question-and-answer-details.component';
import { AskAQuestionComponent } from './components/ask-a-question/ask-a-question.component';

@NgModule({
  declarations: [
    QuestionAndAnswerListComponent,
    QuestionAndAnswerDetailsComponent,
    AskAQuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionAndAnswerRoutingModule,
    SharedModule
  ]
})
export class QuestionAndAnswerModule { }