import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/core/services';

import { Communication } from 'src/app/modules/communication/communication.model';
import { URLConstants } from 'src/app/core/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(
    private httpService: HttpService
  ) { }

  getCommunications(mentorId: number) {
    return this.httpService.get(URLConstants.GET_COMMUNICATIONS_API + `/${mentorId}`);
  }
  
  createCommunication(payload: Communication) {
    return this.httpService.post(URLConstants.CREATE_COMMUNICATION_API, payload);
  }
}
