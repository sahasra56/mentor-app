import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services';

import { URLConstants } from 'src/app/core/constants/url-constants';
import { Question, Answer } from './question-and-answer.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionAndAnswerService {

  questionAndAnswers!: Question[];
  
  constructor(
    private httpService: HttpService
  ) { }

  getQuestions(createdBy: string = 'all') {
    return this.httpService.get(`${URLConstants.GET_QUESTIONS_API}?filters=${createdBy}`);
  }

  getQuestionAnswersById(questionId: number) {
    return this.httpService.get(URLConstants.GET_QUSTION_ANSWERS_BY_ID_API + `/${questionId}`);
  }

  updateQuestion(payload: any) {
    return this.httpService.put(URLConstants.UPDATE_QUESTION_API, payload);
  }

  viewAnsweredQuestions(payload: any = {}) {
    return this.httpService.put(URLConstants.VIEW_ANSWERED_QUESTIONS_API, payload);
  }

  answerAQuestion(payload: any) {
    return this.httpService.put(URLConstants.ANSWER_A_QUESTION_API, payload);
  }

  createQuestion(payload: Question) {
    return this.httpService.post(URLConstants.CREATE_QUESTION_API, payload);
  }
}
