import { Component, OnInit } from '@angular/core';

import { TopicService } from 'src/app/shared/services/topic.service';
import { Topic } from 'src/app/shared/models/topic.model';
import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topics$!: Topic[];

  constructor(
    private topicService: TopicService
  ) { }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    this.topicService.getTopics().subscribe((res: Response) => {
      this.topics$ = res?.data;
    });
  }

}
