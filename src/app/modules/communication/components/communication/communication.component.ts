import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from 'src/app/core/services';
import { UserService } from 'src/app/core/services/user.service';
import { CommunicationService } from 'src/app/modules/communication/communication.service';

import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  mentors$!: any[];
  communications$!: any[];
  communicationsAvailable: boolean = false;
  message: FormControl = new FormControl('');
  selectedMentorId!: number;
  me?: number; // Current user id
  senderId!: number;
  topicId!: number;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService,
    private communicationService: CommunicationService,
    private _location: Location
  ) {

  }

  async ngOnInit() {
    this.me = await this.authService.getUserInfo()._id;
    const topicId = Number(this.route.snapshot.paramMap.get('topic-id'));
    this.topicId = topicId;
    const mentorId = Number(this.route.snapshot.paramMap.get('mentor-id'));
    this.senderId = Number(this.route.snapshot.paramMap.get('sender-id'));
    // this.getMentorsByTopicId();
    this.getCommunications(mentorId);
    this.markCommunicationsAsSeen();
  }

  getMentorsByTopicId() {
    const topicId = Number(this.route.snapshot.paramMap.get('topic-id'));
    this.userService.getMentorsByTopicId(topicId).subscribe((res: Response) => {
      this.mentors$ = res?.data;
    });
  }

  getCommunications(mentorId: number) {
    this.selectedMentorId = mentorId;
    this.communicationService.getCommunications(this.topicId, mentorId, this.senderId).subscribe((res: Response) => {
      this.communications$ = res?.data;
      this.communicationsAvailable = this.communications$.length > 0 ? true : false;
    });
  }

  markCommunicationsAsSeen() {
    const payload = { createdBy: this.senderId };
    this.communicationService.markCommunicationsAsSeen(payload).subscribe((res: Response) => {
      this.communicationService.notificationsUpdated(true);
    });
  }

  handleGetCommunicationWithMentor(mentorId: number) {
    this.getCommunications(mentorId);
  }

  handleSendMessage() {
    let communication = {
      topic: this.topicId,
      to: this.senderId ? this.senderId : this.selectedMentorId,
      content: this.message.value
    }
    this.communicationService.createCommunication(communication).subscribe((res: Response) => {
      this.message.setValue('');
      this.getCommunications(this.selectedMentorId);
    });
  }

  handleGoBack() {
    this._location.back();
  }

}
