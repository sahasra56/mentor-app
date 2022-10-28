import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userName!: string;
  search: FormControl = new FormControl('');
  role!: number;
  ROLES = User.roles;
  
  constructor(
  ) {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo')!);
    this.userName = `${userInfo.name.firstName} ${userInfo.name.lastName}`;
    this.role = userInfo.role;
  }

  ngOnInit(): void {
    
  }
}
