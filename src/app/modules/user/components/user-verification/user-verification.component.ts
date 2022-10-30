import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/services';
import { Response, User } from 'src/app/core/models';

@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.scss']
})
export class UserVerificationComponent implements OnInit {

  users$!: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUnverifiedUsers();
  }

  getUnverifiedUsers() {
    this.userService.getUnverifiedUsers().subscribe((res: Response) => {
      this.users$ = res?.data;
    });
  }

  handleVerifyUser(user: User) {
    const payload = {
      _id: user?._id,
      isVerified: true
    };
    this.userService.updateUser(payload).subscribe((res: Response) => {
      this.users$ = res?.data;
      this.getUnverifiedUsers();
    });
  }

}
