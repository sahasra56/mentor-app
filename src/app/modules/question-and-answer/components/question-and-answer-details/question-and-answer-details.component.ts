import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SnackbarService } from 'src/app/core/services';
import { QuestionAndAnswerService } from '../../question-and-answer.service';

import { Question } from '../../question-and-answer.interface';
import { Response } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-question-and-answer-details',
  templateUrl: './question-and-answer-details.component.html',
  styleUrls: ['./question-and-answer-details.component.scss']
})
export class QuestionAndAnswerDetailsComponent implements OnInit {

  // questionAndAnswer$: Observable<QuestionAndAnswer> = null;
  question$: Question | undefined;
  answer = new FormControl(null, Validators.required);
  questionId!: number;

  constructor(
    private questionAndAnswerService: QuestionAndAnswerService,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute
  ) {
    this.questionId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getQuestionAndAnswer();
  }

  getQuestionAndAnswer() {
    this.questionAndAnswerService.getQuestionAnswersById(this.questionId).subscribe((res: Response) => {
      this.question$ = res?.data;
    });
  }

  handleSubmitAnswer() {
    const questionAnswer = {
      questionId: this.questionId,
      description: this.answer.value
    }
    this.questionAndAnswerService.answerAQuestion(questionAnswer).subscribe((res: Response) => {
      if(res.success) {
        this.snackbarService.openSnackBar(res?.message || '', 'Close', 'success-snackbar');
        this.answer.setValue(null);
        this.getQuestionAndAnswer();
      }
    });
  }

}
