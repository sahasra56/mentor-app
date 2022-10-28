import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/core/services';

import { District } from 'src/app/shared/models/district.model';
import { URLConstants } from 'src/app/core/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(
    private httpService: HttpService
  ) { }

  getDistricts() {
    return this.httpService.get(URLConstants.GET_DISTRICTS_API);
  }

  getDistrictById(id: number) {
    return this.httpService.get(URLConstants.GET_DISTRICT_BY_ID_API + `/${id}`);
  }

  getDistrictByStateId(stateId: number) {
    return this.httpService.get(URLConstants.GET_DISTRICT_BY_STATE_ID_API + `/${stateId}`);
  }

  createDistrict(payload: District) {
    return this.httpService.post(URLConstants.CREATE_DISTRICT_API, payload);
  }
}
