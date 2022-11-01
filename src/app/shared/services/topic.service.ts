import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/core/services';

import { Topic } from 'src/app/shared/models/topic.model';
import { URLConstants } from 'src/app/core/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private httpService: HttpService
  ) { }

  getTopics() {
    return this.httpService.get(URLConstants.GET_TOPICS_API);
  }

  getTopicById(id: number) {
    return this.httpService.get(URLConstants.GET_TOPIC_BY_ID_API + `/${id}`);
  }

  createTopic(payload: Topic) {
    return this.httpService.post(URLConstants.CREATE_TOPIC_API, payload);
  }
  
  updateTopic(payload: Topic) {
    return this.httpService.put(URLConstants.UPDATE_TOPIC_API, payload);
  }
}