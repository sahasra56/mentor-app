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
    return this.httpService.get(URLConstants.GET_SCHOOLS_API);
  }

  getSchoolById(id: number) {
    return this.httpService.get(URLConstants.GET_SCHOOL_BY_ID_API + `/${id}`);
  }

  getSchoolByDistrictId(districtId: number) {
    return this.httpService.get(URLConstants.GET_SCHOOL_BY_DISTRICT_ID_API + `/${districtId}`);
  }

  createSchool(payload: School) {
    return this.httpService.post(URLConstants.CREATE_SCHOOL_API, payload);
  }
}
