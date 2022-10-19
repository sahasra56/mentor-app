import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { AddEventComponent } from './components/add-event/add-event.component';

const routes: Routes = [
  { path: '', redirectTo: 'event-list', pathMatch: 'full' },
  { path: 'event-list', component: EventListComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'event-details/:id', component: EventDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
