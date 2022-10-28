import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/core/services';

import { School } from 'src/app/shared/models/school.model';
import { URLConstants } from 'src/app/core/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private httpService: HttpService
  ) { }

  getSchools() {
    return this.httpService.get(URLConstants.GET_STATES_API);
  }

  getSchoolById(id: number) {
    return this.httpService.get(URLConstants.GET_STATE_BY_ID_API + `/${id}`);
  }

  createSchool(payload: School) {
    return this.httpService.post(URLConstants.CREATE_STATE_API, payload);
  }
}
