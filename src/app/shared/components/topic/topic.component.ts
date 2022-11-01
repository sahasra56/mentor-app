import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TopicService } from 'src/app/shared/services/topic.service';
import { Topic } from 'src/app/shared/models/topic.model';
import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  search: FormControl = new FormControl('');
  topics$!: Topic[];
  topics!: Topic[];

  constructor(
    private topicService: TopicService
  ) {
    this.search.valueChanges.subscribe((searchText: string) => {
      let result = searchText.trim() ? 
        this.topics.filter(e => e.name?.toLowerCase().includes(searchText.toLowerCase())) : this.topics;
      this.topics$ = result;
    });
  }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    this.topicService.getTopics().subscribe((res: Response) => {
      this.topics$ = res?.data;
      this.topics = JSON.parse(JSON.stringify(this.topics$));
    });
  }

}
