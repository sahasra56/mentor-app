import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Response } from 'src/app/core/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss']
})
export class MentorListComponent implements OnInit {

  mentors$!: any[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getMentorsByTopicId();
  }

  getMentorsByTopicId() {
    const topicId = Number(this.route.snapshot.paramMap.get('topic-id'));
    this.userService.getMentorsByTopicId(topicId).subscribe((res: Response) => {
      this.mentors$ = res?.data;
    });
  }

}
