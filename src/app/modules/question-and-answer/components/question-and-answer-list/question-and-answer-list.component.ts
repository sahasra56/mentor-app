import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event, RouterEvent } from '@angular/router';

import { Question } from '../../question-and-answer.interface';
import { Response } from 'src/app/core/models/response.model';
import { QuestionAndAnswerService } from '../../question-and-answer.service';

enum Tabs {
  All = 0,
  You = 1
}

@Component({
  selector: 'app-question-and-answer-list',
  templateUrl: './question-and-answer-list.component.html',
  styleUrls: ['./question-and-answer-list.component.scss']
})
export class QuestionAndAnswerListComponent implements OnInit {

  isContentAvailable: boolean = true;
  value!: string;
  userId: number;
  questions$!: Question[];
  tabIndex: Tabs = Tabs.All;

  constructor(
    private questionAndAnswerService: QuestionAndAnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userId = JSON.parse(sessionStorage.getItem('userInfo')!)?._id;
    this.route.params.subscribe((params: any) => {
      if (params && params?.tab === 'you') {
        // Get list of questions asked by you
        this.setTab(Tabs.You);
        this.getQuestions('me');
      } else {
        // Get list of questions asked by all
        this.setTab(Tabs.All);
        this.getQuestions();
      }
    })
  }

  ngOnInit(): void {
  }

  setTab(tab: Tabs) {
    this.tabIndex = tab;
  }

  getQuestions(createdBy: string = 'all') {
    this.questionAndAnswerService.getQuestions(createdBy).subscribe((res: Response) => {
      this.questions$ = res?.data;
      if (createdBy === 'all') {
        this.isContentAvailable = this.questions$.length > 0 ? true : false;
      }
      if (this.questions$.length > 0) {
        this.viewAnsweredQuestions();
      }
    });
  }

  // This API call view confirm that user has viewed answered questions
  viewAnsweredQuestions() {
    this.questionAndAnswerService.viewAnsweredQuestions().subscribe((res: Response) => {
      // console.log(res.data);
    });
  }

  handleTabChange(event: any) {
    this.questions$ = [];
    const createdBy = event?.index === 1 ? 'me' : 'all';
    this.getQuestions(createdBy);
  }
}
