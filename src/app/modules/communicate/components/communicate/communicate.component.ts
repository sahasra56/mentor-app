import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Response } from 'src/app/core/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.scss']
})
export class CommunicateComponent implements OnInit {

  mentors$!: any[];
  chats$!: any[];
  chatsAvailable: boolean = false;
  message: FormControl = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getMentorsByTopicId();
    // this.getChats();
  }

  getMentorsByTopicId() {
    const topicId = Number(this.route.snapshot.paramMap.get('topic-id'));
    this.userService.getMentorsByTopicId(topicId).subscribe((res: Response) => {
      this.mentors$ = res?.data;
    });
  }

  getChats() {
    const mentorId = Number(this.route.snapshot.paramMap.get('mentor-id'));
    this.userService.getMentorsByTopicId(mentorId).subscribe((res: Response) => {
      this.chats$ = res?.data;
    });
  }

  handleGetChatWithMentor() {
    this.getChats();
  }

  handleSendMessage() {

  }

}
