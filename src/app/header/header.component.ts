import { Component, OnInit } from '@angular/core';
import { Constants } from '../core/constants/constants';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

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
  userInitialName!: string;
  userInfo!: User;
  isLoggedIn$!: Observable<boolean>;
  notificationCount!: number;
  notification$!: any;
  isNotificationsAvailable: boolean = true;
  profilePicUploadSubscription!: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.initiateSubscriptions();
  }

  initiateSubscriptions() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.isLoggedIn.subscribe((res: any) => {
      if (res) {
        this.getUserDetails();
        // this.getUserNotifications();
      }
    });

    this.profilePicUploadSubscription = this.userService.getProfilePicUploadEmitter()
      .subscribe(() => {
        this.getUserDetails();
      });
  }

  getUserDetails() {
    this.userService.authMe().subscribe((res: Response) => {
      this.userInfo = res?.data;
      this.userName = `${this.userInfo?.name?.firstName} ${this.userInfo?.name?.lastName}`;
      this.userInitialName = this.userInfo!.name!.firstName.charAt(0) + this.userInfo!.name!.lastName.charAt(0);
      // this.userInfo.profilePicUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.userInfo?.profilePicUrl!);
      console.log('this.userInfo.profilePicUrl', this.userInfo.profilePicUrl);
    });
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
