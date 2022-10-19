import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz-angular-app';

  isLoggedIn$!: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) {
    
  }

  ngOnInit() {
    this.initiateSubscriptions();
  }

  initiateSubscriptions() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  handleLogoutClick() {
    this.authService.logout();
  }
}
