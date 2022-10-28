import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UserService } from 'src/app/core/services';
import { User } from 'src/app/core/models/user.model';
import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userInfo!: User;
  userName!: string;
  search: FormControl = new FormControl('');
  role!: number;
  ROLES = User.roles;
  isProfileCompleted!: boolean;
  isNotificationsAvailable: boolean = true;
  
  constructor(
    private userService: UserService
  ) {
    this.userService.authMe().subscribe((res: Response) => {
      this.userInfo = res?.data;
      this.userName = `${this.userInfo?.name?.firstName} ${this.userInfo?.name?.lastName}`;
      this.role = this.userInfo?.role!;
    })
  }

  ngOnInit(): void {
    
  }
}
