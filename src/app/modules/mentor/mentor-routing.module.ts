import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MentorListComponent } from './components/mentor-list/mentor-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'mentor-list', pathMatch: 'full' },
  { path: 'mentor-list/:topic-id', component: MentorListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
