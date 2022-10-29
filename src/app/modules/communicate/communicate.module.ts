import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { CommunicateRoutingModule } from './communicate-routing.module';
import { CommunicateComponent } from './components/communicate/communicate.component';

@NgModule({
  declarations: [
    CommunicateComponent
  ],
  imports: [
    CommonModule,
    CommunicateRoutingModule,
    SharedModule
  ]
})
export class CommunicateModule { }
