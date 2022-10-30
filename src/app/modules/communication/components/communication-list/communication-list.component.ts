import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services';
import { CommunicationService } from 'src/app/modules/communication/communication.service';

import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-communication-list',
  templateUrl: './communication-list.component.html',
  styleUrls: ['./communication-list.component.scss']
})
export class CommunicationListComponent implements OnInit {

  communications$!: any[];

  constructor(
    private authService: AuthService,
    private communicationService: CommunicationService
  ) { }

  ngOnInit(): void {
    this.getUnseenCommunications();
  }

  async getUnseenCommunications() {
    const userId = await this.authService.getUserInfo()._id;
    this.communicationService.getUnseenCommunications(userId).subscribe((res: Response) => {
      this.communications$ = res?.data;
    });
  }

}
