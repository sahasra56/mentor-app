import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';

import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
