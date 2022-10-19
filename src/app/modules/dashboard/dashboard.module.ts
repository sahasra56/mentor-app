import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppMaterialModule } from 'src/app/core/modules/app-material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
// import { EventDetailsComponent } from '../events/components/event-details/event-details.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    // EventDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
