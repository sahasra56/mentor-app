import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Response, User } from 'src/app/core/models';

import { CommunicationService } from 'src/app/modules/communication/communication.service';
import { SnackbarService, UserService } from 'src/app/core/services';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm!: FormGroup;
  userInfo!: User;

  constructor(
    private formBuilder: FormBuilder,
    private communicationService: CommunicationService,
    private snackbar: SnackbarService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getUserDetails();
  }

  initializeForm() {

    this.contactForm = new FormGroup({
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      email: new FormControl(''),
      message: new FormControl('', Validators.required)
    });

    this.contactForm.controls['name'].disable();
    this.contactForm.controls['email'].disable();
  }

  getUserDetails() {
    this.userService.authMe().subscribe((res: Response) => {
      this.userInfo = res?.data;
      this.contactForm.patchValue({
        name: this.userInfo.name,
        email: this.userInfo.email
      })
    });
  }

  handleContactUs() {
    console.log('this.contactForm.value', this.contactForm.getRawValue());
    this.communicationService.sendContactUsEmail(this.contactForm.getRawValue()).subscribe((res: Response) => {
      this.snackbar.openSnackBar(res?.message!, 'Close', 'success-snackbar');
      this.contactForm.patchValue({
        message: ''
      });
    })
  }

}
