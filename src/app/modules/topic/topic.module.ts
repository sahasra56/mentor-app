import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { TopicRoutingModule } from './topic-routing.module';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';

@NgModule({
  declarations: [
    CreateTopicComponent,
    TopicListComponent
  ],
  imports: [
    CommonModule,
    TopicRoutingModule,
    SharedModule
  ]
})
export class TopicModule { }
