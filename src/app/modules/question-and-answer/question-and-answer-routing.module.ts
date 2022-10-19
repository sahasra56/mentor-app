import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionAndAnswerListComponent } from './components/question-and-answer-list/question-and-answer-list.component';
import { QuestionAndAnswerDetailsComponent } from './components/question-and-answer-details/question-and-answer-details.component';
import { AskAQuestionComponent } from './components/ask-a-question/ask-a-question.component';

const routes: Routes = [
  { path: '', redirectTo: 'question-and-answer-list', pathMatch: 'full' },
  { path: 'question-and-answer-list', component: QuestionAndAnswerListComponent },
  { path: 'question-and-answer-details/:id', component: QuestionAndAnswerDetailsComponent },
  { path: 'ask-a-question', component: AskAQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionAndAnswerRoutingModule { }
