import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { CommunicationRoutingModule } from './communication-routing.module';
import { CommunicationComponent } from './components/communication/communication.component';
import { CommunicationListComponent } from './components/communication-list/communication-list.component';

@NgModule({
  declarations: [
    CommunicationComponent,
    CommunicationListComponent
  ],
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    SharedModule
  ]
})
export class CommunicationModule { }
