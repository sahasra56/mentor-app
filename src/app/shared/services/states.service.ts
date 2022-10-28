import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/core/services';

import { State } from 'src/app/shared/models/state.model';
import { URLConstants } from 'src/app/core/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
    private httpService: HttpService
  ) { }

  getStates() {
    return this.httpService.get(URLConstants.GET_STATES_API);
  }

  getStateById(id: number) {
    return this.httpService.get(URLConstants.GET_STATE_BY_ID_API + `/${id}`);
  }

  createState(payload: State) {
    return this.httpService.post(URLConstants.CREATE_STATE_API, payload);
  }
}
