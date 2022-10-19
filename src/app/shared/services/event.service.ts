import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/core/services';

import { Event } from 'src/app/shared/models/event.model';
import { URLConstants } from 'src/app/core/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private httpService: HttpService
  ) { }

  getEvents(eventLimit: number) {
    const obj = { limit: eventLimit.toString() };
    return this.httpService.get(`${URLConstants.GET_EVENTS_API}`, JSON.parse(JSON.stringify(obj)));
  }

  getEventById(id: number) {
    return this.httpService.get(URLConstants.GET_EVENT_BY_ID_API + `/${id}`);
  }

  createEvent(payload: Event) {
    return this.httpService.post(URLConstants.CREATE_EVENT_API, payload);
  }
}
