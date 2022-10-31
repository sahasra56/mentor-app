import { Component, OnInit } from '@angular/core';
import { Constants } from '../core/constants/constants';
import { Observable } from 'rxjs';

import { AuthService, UserService } from 'src/app/core/services';
import { User } from 'src/app/core/models/user.model';
import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  applicationName: string = Constants.applicationName;
  userName!: string;
  isLoggedIn$!: Observable<boolean>;
  notificationCount!: number;
  notification$!: any;
  isNotificationsAvailable: boolean = true;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initiateSubscriptions();
  }

  initiateSubscriptions() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.isLoggedIn.subscribe((res: any) => {
      if (res) {
        this.getUserNotifications();
      }
    })
  }

  getUserNotifications() {
    this.userService.getUserNotifications().subscribe((res: Response) => {
      this.notification$ = res?.data;
      this.notificationCount = res?.data?.unseenCommunications ? res?.data?.unseenCommunications : '';
      this.isNotificationsAvailable = Object.keys(this.notification$).some((key: any) => {
        return this.notification$[key] > 0
      });
    });
  }

  handleLogoutClick() {
    this.authService.logout();
  }

}
