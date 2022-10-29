import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { CommunicationRoutingModule } from './communication-routing.module';
import { CommunicationComponent } from './components/communication/communication.component';

@NgModule({
  declarations: [
    CommunicationComponent
  ],
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    SharedModule
  ]
})
export class CommunicationModule { }
