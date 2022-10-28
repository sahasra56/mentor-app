import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

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
  
  createUser(payload: User) {
    return this.httpService.post(URLConstants.REGISTER_USER_API, payload);
  }

  getUsers() {
    return this.httpService.get('getUsers');
  }

  updateUser(payload: any) {
    return this.httpService.put(`updateUser/${payload._id}`, payload);
  }

  deleteUser(payload: any) {
    return this.httpService.delete(`deleteUser/${payload._id}`);
  }

  getUserById(userId: Number) {
    return this.httpService.get(`getUserById/${userId}`);
  }

  emitUserFormData(payload: any) {
    this.userForm.next(payload);
  }

  getUserNotifications() {
    return this.httpService.get(URLConstants.GET_USER_NOTIFICATIONS_API);
  }
  
}

