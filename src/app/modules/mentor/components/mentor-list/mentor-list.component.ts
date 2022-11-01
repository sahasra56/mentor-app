import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from 'src/app/core/services/user.service';
import { TopicService } from 'src/app/shared/services/topic.service';

import { Topic } from 'src/app/shared/models/topic.model';
import { Response } from 'src/app/core/models';

import { ResourcesComponent } from '../resources/resources.component';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss']
})
export class MentorListComponent implements OnInit {

  mentors$!: any[];
  topicId!: number;
  topicInfo!: Topic;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private topicService: TopicService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.topicId = Number(this.route.snapshot.paramMap.get('topic-id'));
    this.getMentorsByTopicId();
    this.getTopicById();
  }

  getMentorsByTopicId() {
    try {
      this.userService.getMentorsByTopicId(this.topicId).subscribe((res: Response) => {
        this.mentors$ = res?.data;
        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
    }
  }

  getTopicById() {
    this.topicService.getTopicById(this.topicId!).subscribe((res: Response) => {
      this.topicInfo = res?.data;
    });
  }

  handleLearnMore() {
    const dialogRef = this.matDialog.open(ResourcesComponent, {
      width: '800px',
      data: {
        topicInfo: this.topicInfo
      },
      restoreFocus: false
    });
  }

}
