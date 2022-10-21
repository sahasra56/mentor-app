import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/core/models';

import { PersonalityTestService } from '../../personality-test.service';

@Component({
  selector: 'app-personality-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.scss']
})
export class PersonalityTestComponent implements OnInit {

  questions$!: any[];
  choices$!: any[];

  constructor(
    private personalityTestService: PersonalityTestService
  ) { }

  ngOnInit(): void {
    this.getQuestions();
    this.getChoices();
  }

  getQuestions() {
    this.personalityTestService.getQuestions().subscribe((res: any) => {
      this.questions$ = res;
    });
  }

  getChoices() {
    this.personalityTestService.getChoices().subscribe((res: any) => {
      this.choices$ = res;
    });
  }
}
