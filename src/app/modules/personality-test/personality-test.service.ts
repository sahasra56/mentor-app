import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/core/services';

import { Event } from 'src/app/shared/models/event.model';
import { URLConstants } from 'src/app/core/constants/url-constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalityTestService {

  constructor(
    private httpService: HttpService
  ) { }

  getQuestions() {
    const questions = [
        { id: 1, description: 'You regularly make new friends.', isAnswered: false },
        { id: 1, description: 'You spend a lot of your free time exploring various random topics that pique your interest.', isAnswered: false },
        { id: 1, description: 'Seeing other people cry can easily make you feel like you want to cry too.', isAnswered: false },
        { id: 1, description: 'You often make a backup plan for a backup plan.', isAnswered: false },
        { id: 1, description: 'You usually stay calm, even under a lot of pressure.', isAnswered: false },
        { id: 1, description: 'At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know.', isAnswered: false },
        { id: 1, description: 'You prefer to completely finish one project before starting another.', isAnswered: false },
        { id: 1, description: 'You are very sentimental.', isAnswered: false },
        { id: 1, description: 'You like to use organizing tools like schedules and lists.', isAnswered: false },
        { id: 1, description: 'Even a small mistake can cause you to doubt your overall abilities and knowledge.', isAnswered: false },
        { id: 1, description: 'You feel comfortable just walking up to someone you find interesting and striking up a conversation.', isAnswered: false },
        { id: 1, description: 'You are not too interested in discussing various interpretations and analyses of creative works.', isAnswered: false },
        { id: 1, description: 'You are more inclined to follow your head than your heart.', isAnswered: false },
        { id: 1, description: 'You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine.', isAnswered: false },
        { id: 1, description: 'You rarely worry about whether you make a good impression on people you meet.', isAnswered: false },
        { id: 1, description: 'You enjoy participating in group activities.', isAnswered: false }
    ];
    return of(questions);
  }

  getChoices() {
    const choices = [
        { id: 1, displayName: 'Agree' },
        { id: 2, displayName: 'Agree' },
        { id: 3, displayName: 'Agree' },
        { id: 4, displayName: 'Neutral' },
        { id: 5, displayName: 'Disagree' },
        { id: 6, displayName: 'Disagree' },
        { id: 7, displayName: 'Disagree' }
    ];
    return of(choices);
  }

  getEventById(id: number) {
    return this.httpService.get(URLConstants.GET_EVENT_BY_ID_API + `/${id}`);
  }

  createEvent(payload: Event) {
    return this.httpService.post(URLConstants.CREATE_EVENT_API, payload);
  }
}
