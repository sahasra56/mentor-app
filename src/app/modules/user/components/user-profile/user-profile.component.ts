import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService, SnackbarService, UserService } from 'src/app/core/services';
import { StateService } from 'src/app/shared/services/states.service';
import { DistrictService } from 'src/app/shared/services/districts.service';
import { SchoolService } from 'src/app/shared/services/schools.service';

import { User, Response } from 'src/app/core/models';
import { State } from 'src/app/shared/models/state.model';
import { District } from 'src/app/shared/models/district.model';
import { School } from 'src/app/shared/models/school.model';

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
  ];

  roles = [
    { id: 2, name: 'Mentor' },
    { id: 3, name: 'Seeker' }
  ];

  isMentor!: boolean;
  states$!: State[];
  districts$!: District[];
  schools$!: School[];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private stateService: StateService,
    private districtService: DistrictService,
    private schoolService: SchoolService,
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
    this.getStates();
  }

  getUserById() {
    this.userService.getUserById(this.userInfo._id!).subscribe((res: Response) => {
      this.userInfo = res?.data;
      this.initializeForm();
    });
  }

  initializeForm() {
    this.userForm = new FormGroup({
      _id: new FormControl(this.userInfo._id),
      name: this.formBuilder.group({
        firstName: [this.userInfo.name?.firstName, Validators.required],
        lastName: [this.userInfo.name?.lastName, Validators.required]
      }),
      email: new FormControl(this.userInfo.email, Validators.required),
      mobileNumber: new FormControl(this.userInfo.mobileNumber),
      age: new FormControl(this.userInfo.age),
      categories: new FormControl(this.userInfo.categories, Validators.required),
      state: new FormControl(this.userInfo.state),
      district: new FormControl(this.userInfo.district),
      school: new FormControl(this.userInfo.school)
    });

    this.userForm.controls['email'].disable();
  }

  getStates() {
    this.stateService.getStates().subscribe((res: Response) => {
      this.states$ = res?.data;
    });
  }

  handleStateSelection(event: any) {
    console.log('event', event);
    this.getDistrictByStateId();
  }

  getDistrictByStateId() {
    this.districtService.getDistrictByStateId(this.userForm.value.state).subscribe((res: Response) => {
      this.districts$ = res?.data;
    });
  }

  handleUpdateProfile() {
    try {
      this.userService.updateUser(this.userForm.value).subscribe((res: Response) => {
        this.snackBar.openSnackBar(res?.message!, 'Close', 'green-snackbar');
      });
    } catch (error: any) {
      this.snackBar.openSnackBar(error, 'Close', 'red-snackbar');
    }
  }

}
