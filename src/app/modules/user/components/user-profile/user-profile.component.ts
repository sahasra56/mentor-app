import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService, SnackbarService, UserService } from 'src/app/core/services';
import { User, Response } from 'src/app/core/models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userInfo!: User;
  userName!: string;
  role!: any;
  ROLES = User.roles;
  userForm!: FormGroup;
  categories: any[] = [
    { id: 1, name: 'Mathematics', selected: false },
    { id: 2, name: 'Computer', selected: false },
    { id: 3, name: 'Music', selected: false }
  ]

  roles = [
    { id: 2, name: 'Mentor' },
    { id: 3, name: 'Seeker' }
  ]

  isMentor!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private snackBar: SnackbarService
  ) {
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo')!);
    this.userName = `${this.userInfo!.name!.firstName} ${this.userInfo!.name!.lastName}`;
    this.role = this.roles.find((e) => e.id === this.userInfo.role);
    this.isMentor = authService.isMentor();
  }

  ngOnInit(): void {
    this.getUserById();
    this.initializeForm();
  }

  getUserById() {
    this.userService.getUserById(this.userInfo._id!).subscribe((res: Response) => {
      this.userInfo = res?.data;
      this.initializeForm();
    });
  }

  initializeForm() {
    console.log('this.userInfo', this.userInfo);
    this.userForm = new FormGroup({
      _id: new FormControl(this.userInfo._id),
      name: this.formBuilder.group({
        firstName: [this.userInfo.name?.firstName, Validators.required],
        lastName: [this.userInfo.name?.lastName, Validators.required]
      }),
      email: new FormControl(this.userInfo.email, Validators.required),
      mobileNumber: new FormControl(this.userInfo.mobileNumber),
      age: new FormControl(this.userInfo.age),
      categories: new FormControl(this.userInfo.categories, Validators.required)
    });

    this.userForm.controls['email'].disable();
  }

  handleUpdateProfile() {
    try {
      console.log('this.userForm.value', this.userForm.value);
      this.userService.updateUser(this.userForm.value).subscribe((res: Response) => {
        this.snackBar.openSnackBar(res?.message!, 'Close', 'green-snackbar');
      });
    } catch (error: any) {
      this.snackBar.openSnackBar(error, 'Close', 'red-snackbar');
    }
  }

}
