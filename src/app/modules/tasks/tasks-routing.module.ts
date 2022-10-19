import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AddTaskComponent } from '../../shared/components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'task-list', pathMatch: 'full' },
  { path: 'task-list', component: TaskListComponent },
  // { path: 'add-task', component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
