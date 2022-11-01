import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { HttpService } from 'src/app/core/services/http.service';
import { URLConstants } from 'src/app/core/constants/url-constants';
import { User } from "src/app/core/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userForm: BehaviorSubject<any> = new BehaviorSubject<any>({});
  currentUserData = this.userForm.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private httpService: HttpService
  ) { }

  authenticate(payload: User) {
    return this.httpService.post(URLConstants.AUTHENTICATE_API, payload);
  }

  authMe() {
    return this.httpService.get(URLConstants.AUTH_ME_API);
  }

  createUser(payload: User) {
    return this.httpService.post(URLConstants.REGISTER_USER_API, payload);
  }

  getUsers() {
    return this.httpService.get(URLConstants.GET_USERS_API);
  }

  getAllSeekers() {
    return this.httpService.get(URLConstants.GET_SEEKERS_API);
  }

  getUnverifiedUsers() {
    return this.httpService.get(URLConstants.GET_UNVERIFIED_USERS_API);
  }

  uploadProfilePicture(payload: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    }
    return this.httpService.put(URLConstants.UPLOAD_PROFILE_PIC_API, payload, httpOptions);
  }

  updateUser(payload: any) {
    return this.httpService.put(URLConstants.UPDATE_USER_API + `/${payload._id}`, payload);
  }

  deleteUser(payload: any) {
    return this.httpService.delete(`deleteUser/${payload._id}`);
  }

  getUserById(userId: Number) {
    return this.httpService.get(URLConstants.GET_USER_BYID_API + `/${userId}`);
  }

  emitUserFormData(payload: any) {
    this.userForm.next(payload);
  }

  getUserNotifications() {
    return this.httpService.get(URLConstants.GET_USER_NOTIFICATIONS_API);
  }

  getMentorsByTopicId(topicId: number) {
    return this.httpService.get(URLConstants.GET_MENTORS_BY_TOPIC_ID_API + `/${topicId}`);
  }

}

