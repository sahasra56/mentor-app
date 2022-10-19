import { Component, OnInit } from '@angular/core';
import { Constants } from '../core/constants/constants';
import { Observable } from 'rxjs';

import { AuthService } from '../core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  applicationName: string = Constants.applicationName;
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initiateSubscriptions();
  }

  initiateSubscriptions() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  handleLogoutClick() {
    this.authService.logout();
  }

}
