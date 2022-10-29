import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunicateComponent } from './components/communicate/communicate.component';

const routes: Routes = [
  { path: '', redirectTo: 'mentor', pathMatch: "full" },
  { path: 'mentor/:topic-id/:mentor-id', component: CommunicateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicateRoutingModule { }
