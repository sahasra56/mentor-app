import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { CommunicationRoutingModule } from './communication-routing.module';
import { CommunicationComponent } from './components/communication/communication.component';
import { CommunicationListComponent } from './components/communication-list/communication-list.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    CommunicationComponent,
    CommunicationListComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    SharedModule
  ]
})
export class CommunicationModule { }
