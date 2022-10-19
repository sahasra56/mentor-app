import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { QuestionAndAnswerService } from '../../question-and-answer.service';
import { SnackbarService } from 'src/app/core/services';
import { Response } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-ask-a-question',
  templateUrl: './ask-a-question.component.html',
  styleUrls: ['./ask-a-question.component.scss']
})
export class AskAQuestionComponent implements OnInit {

  questionForm!: FormGroup;
  isLoading: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private questionAndAnswerService: QuestionAndAnswerService,
    private snackbarService: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initQuestionForm();
  }

  initQuestionForm() {
    this.questionForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  handleSaveQuestion() {
    this.questionAndAnswerService.createQuestion(this.questionForm.value).subscribe((res: Response) => {
      this.snackbarService.openSnackBar(res?.message || '', 'Close', 'success-snackbar');
      this.router.navigate(['question-and-answer']);
    });
  }

}
