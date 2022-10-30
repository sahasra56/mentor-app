import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunicationListComponent } from './components/communication-list/communication-list.component';
import { CommunicationComponent } from './components/communication/communication.component';

const routes: Routes = [
  { path: '', redirectTo: 'communication-list', pathMatch: "full" },
  { path: 'communication-list', component: CommunicationListComponent },
  { path: 'mentor/:topic-id/:mentor-id/:sender-id', component: CommunicationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }
