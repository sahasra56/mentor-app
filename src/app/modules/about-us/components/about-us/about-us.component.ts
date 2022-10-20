import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  locatedCities = [{
    name: 'Sydney',
    address: '48 Pirrama Rd',
    location: 'Pyrmont NSW 2009'
  }, {
    name: 'Melbourne',
    address: '161 Collins St.',
    location: 'Melbourne VIC 3000'
  }, {
    name: 'Los Angeles',
    address: '340 Main St. Venice',
    location: 'CA 90921, USA'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
