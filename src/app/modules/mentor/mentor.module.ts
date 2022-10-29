import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorRoutingModule } from './mentor-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { MentorListComponent } from './components/mentor-list/mentor-list.component';

@NgModule({
  declarations: [
    MentorListComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    SharedModule
  ]
})
export class MentorModule { }
