import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/core/services';
import { UserService } from 'src/app/core/services/user.service';
import { TopicService } from 'src/app/shared/services/topic.service';
import { CommunicationService } from 'src/app/modules/communication/communication.service';

import { Topic } from 'src/app/shared/models/topic.model';
import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mentors$!: any[];
  communications$!: any[];
  communicationsAvailable: boolean = false;
  message: FormControl = new FormControl('');
  selectedMentorId!: number;
  me?: number; // Current user id
  senderId!: number;
  topics$!: Topic[];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService,
    private topicService: TopicService,
    private communicationService: CommunicationService
  ) {

  }

  async ngOnInit() {
    this.me = await this.authService.getUserInfo()._id;
    const mentorId = Number(this.route.snapshot.paramMap.get('mentor-id'));
    this.senderId = Number(this.route.snapshot.paramMap.get('sender-id'));
    this.getTopics();
    // this.getMentorsByTopicId();
    // this.getCommunications(mentorId);
    // this.markCommunicationsAsSeen();
  }

  getTopics() {
    this.topicService.getTopics().subscribe((res: Response) => {
      this.topics$ = res?.data;
    });
  }

  getMentorsByTopicId(topicId: number) {
    // const topicId = Number(this.route.snapshot.paramMap.get('topic-id'));
    this.userService.getMentorsByTopicId(topicId!).subscribe((res: Response) => {
      this.mentors$ = res?.data;
    });
  }

  getCommunications(mentorId: number) {
    this.selectedMentorId = mentorId;
    this.communicationService.getCommunications(mentorId, this.senderId).subscribe((res: Response) => {
      this.communications$ = res?.data;
      this.communicationsAvailable = this.communications$.length > 0 ? true : false;
    });
  }

  markCommunicationsAsSeen() {
    const payload = { createdBy: this.senderId };
    this.communicationService.markCommunicationsAsSeen(payload).subscribe((res: Response) => {
    });
  }

  handleGetCommunicationWithMentor(mentorId: number) {
    this.getCommunications(mentorId);
  }

  handleSendMessage() {
    let communication = {
      to: this.senderId ? this.senderId : this.selectedMentorId,
      content: this.message.value
    }
    this.communicationService.createCommunication(communication).subscribe((res: Response) => {
      this.message.setValue('');
      this.getCommunications(this.selectedMentorId);
    });
  }

}
