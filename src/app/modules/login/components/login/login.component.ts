import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showLoading: boolean = false;
  hide: boolean = true;

  emailValidatorPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(
    private authService: AuthService,
    private snackBar: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.authService.logout();
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailValidatorPattern)]),
      password: new FormControl('', Validators.required),
    })
  }

  login() {
    try {
      this.authService.login(this.loginForm.value);
    } catch(error: any) {
      this.snackBar.openSnackBar(error, 'Close', 'red-snackbar');
    }
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

  // forgotPassword(){
  //   try {

  //   } catch (error: any) {
  //     this.snackBar.openSnackBar(error.message, 'Close', 'red-snackbar');
  //   }
  // }

  ngOnDestroy(){

  }
}
