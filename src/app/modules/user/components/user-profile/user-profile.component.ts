import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService, SnackbarService, UserService } from 'src/app/core/services';
import { StateService } from 'src/app/shared/services/states.service';
import { DistrictService } from 'src/app/shared/services/districts.service';
import { SchoolService } from 'src/app/shared/services/schools.service';
import { TopicService } from 'src/app/shared/services/topic.service';

import { User, Response } from 'src/app/core/models';
import { State } from 'src/app/shared/models/state.model';
import { District } from 'src/app/shared/models/district.model';
import { School } from 'src/app/shared/models/school.model';
import { Topic } from 'src/app/shared/models/topic.model';

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
  topics$!: Topic[];

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
    private topicService: TopicService,
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
    this.getTopics();
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
      topics: new FormControl(this.userInfo.topics, Validators.required),
      state: new FormControl(this.userInfo.state),
      district: new FormControl(this.userInfo.district),
      school: new FormControl(this.userInfo.school)
    });

    this.userForm.controls['email'].disable();
    if (this.userForm.value.state) {
      this.getDistrictByStateId();
    }

    if (this.userForm.value.district) {
      this.getSchoolByDistrictId();
    }
  }
  
  getTopics() {
    this.topicService.getTopics().subscribe((res: Response) => {
      this.topics$ = res?.data;
    });
  }

  getStates() {
    this.stateService.getStates().subscribe((res: Response) => {
      this.states$ = res?.data;
    });
  }

  handleStateSelection(event: any) {
    this.getDistrictByStateId();
  }

  getDistrictByStateId() {
    this.districtService.getDistrictByStateId(this.userForm.value.state).subscribe((res: Response) => {
      this.districts$ = res?.data;
    });
  }

  handleDistrictSelection(event: any) {
    this.getSchoolByDistrictId();
  }

  getSchoolByDistrictId() {
    this.schoolService.getSchoolByDistrictId(this.userForm.value.district).subscribe((res: Response) => {
      this.schools$ = res?.data;
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
