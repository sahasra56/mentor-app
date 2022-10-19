import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './components/events.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { AddEventComponent } from './components/add-event/add-event.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventListComponent,
    EventDetailsComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
