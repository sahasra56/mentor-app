import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userName!: string;
  
  constructor(
  ) {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo')!)?.name;
    this.userName = `${userInfo.firstName} ${userInfo.lastName}`;
  }

  ngOnInit(): void {
    
  }
}
