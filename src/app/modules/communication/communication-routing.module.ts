import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunicationComponent } from './components/communication/communication.component';

const routes: Routes = [
  { path: '', redirectTo: 'mentor', pathMatch: "full" },
  { path: 'mentor/:topic-id/:mentor-id', component: CommunicationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }
