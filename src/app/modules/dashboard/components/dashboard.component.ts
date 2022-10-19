import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services';
import { Response } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  value = '';
  isContentAvailable: boolean = true;
  isNotificationsAvailable: boolean = false;
  userName!: string;
  notification$!: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo')!)?.name;
    this.userName = `${userInfo.firstName} ${userInfo.lastName}`;
  }

  ngOnInit(): void {
    this.getUserNotifications();
  }

  handleQuestionResponseClick(): void {
    this.router.navigate(['question-and-answer/question-and-answer-list', { tab: 'you' }]);
  }

  getUserNotifications() {
    this.userService.getUserNotifications().subscribe((res: Response) => {
      this.notification$ = res?.data;
      this.isNotificationsAvailable = Object.keys(this.notification$).some((key: any) => {
        return this.notification$[key] > 0
      });
      console.log('this.isNotificationsAvailable', this.isNotificationsAvailable);
    });
  }
}
