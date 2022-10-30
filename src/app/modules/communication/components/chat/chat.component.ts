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
  topicId!: number;
  isMentor$!: boolean;
  selectedTopicId!: number;

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
    this.isMentor$ = await this.authService.isMentor();
    const mentorId = Number(this.route.snapshot.paramMap.get('mentor-id'));
    this.senderId = Number(this.route.snapshot.paramMap.get('sender-id'));
    this.getTopics();
    this.markCommunicationsAsSeen();
  }

  getTopics() {
    this.topicService.getTopics().subscribe((res: Response) => {
      this.topics$ = res?.data;
    });
  }

  // Get mentors for selected topic
  getMentorsByTopicId(topicId: number) {
    this.topicId = topicId;
    this.userService.getMentorsByTopicId(topicId!).subscribe((res: Response) => {
      this.mentors$ = res?.data;
      this.selectedMentorId = 0;
      this.communications$ = [];
      this.communicationsAvailable = this.communications$.length > 0 ? true : false;
    });
  }

  // Get communications for selected topic, mentor and createdBy user combination
  getCommunications(mentorId: number) {
    this.selectedMentorId = mentorId;
    this.communicationService.getCommunications(this.topicId, mentorId, this.senderId).subscribe((res: Response) => {
      this.communications$ = res?.data;
      this.communicationsAvailable = this.communications$.length > 0 ? true : false;
    });
  }

  // Mark communications as seen for selected receiver and createdBy user combination
  markCommunicationsAsSeen() {
    const payload = { createdBy: this.senderId };
    this.communicationService.markCommunicationsAsSeen(payload).subscribe((res: Response) => {
    });
  }

  // When mentor is changed, load communications for selected topic, mentor and createdBy user combination
  handleGetCommunicationWithMentor(mentorId: number) {
    this.getCommunications(mentorId);
  }

  // Send a new message to selected user against selected topic
  handleSendMessage() {
    let communication = {
      topic: this.topicId,
      to: this.senderId ? this.senderId : this.selectedMentorId,
      content: this.message.value
    };
    this.communicationService.createCommunication(communication).subscribe((res: Response) => {
      this.message.setValue('');
      this.getCommunications(this.selectedMentorId);
    });
  }

}
