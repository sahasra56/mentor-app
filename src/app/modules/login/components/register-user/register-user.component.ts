import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { Response } from "src/app/core/models/response.model";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  userForm!: FormGroup;
  emailValidatorPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  hide: boolean = true;

  roles = [
    // { id: 1, name: 'Admin' },
    { id: 2, name: 'Mentor' },
    { id: 3, name: 'Seeker' }
  ]

  salutations: string[] = ['Mr.', 'Mrs.', 'Miss'];

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {

    this.userForm = new FormGroup({
      role: new FormControl(null),
      name: this.formBuilder.group({
        // salutation: ['', Validators.required],
        firstName: ['', Validators.required],
        // middleName: [''],
        lastName: ['', Validators.required],
        // suffix: ['']
      }),
      email: new FormControl(''),
      password: new FormControl(''),
      docUrl: new FormControl('')
      // address: new FormGroup({
      //   street: new FormControl(''),
      //   city: new FormControl(''),
      //   state: new FormControl(''),
      //   zip: new FormControl('')
      // })
    });

    // this.userForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.pattern(this.emailValidatorPattern)]],
    //   password: ['', Validators.required]
    //   // mobileNumber: new FormControl('', Validators.required),
    //   // alternateContactNumbers: new FormControl('', Validators.required)
    // });
  }

  handleRoleSelection() {
    if (this.userForm.value.role == 2) {
      this.userForm.controls['docUrl'].setValidators([Validators.required]);
    }
  }

  handleRegsiterUser() {
    try {
      this.userService.createUser(this.userForm.value).subscribe((res: Response) => {
        this.snackBar.openSnackBar(res?.message!, 'Close', 'green-snackbar');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      });
    } catch (error: any) {
      this.snackBar.openSnackBar(error, 'Close', 'red-snackbar');
    }
  }

  markFormPristine(form: FormGroup): void {
    Object.keys(form.controls).forEach(control => {
      form.controls[control].markAsPristine();
    });
  }

  unhide() {
    var set;
    if (this.hide) {
      this.hide = false
      set = setTimeout(() => {
        this.hide = true
      }, 3000);
    } else {
      this.hide = true
      clearTimeout(set)
    }
  }

}
