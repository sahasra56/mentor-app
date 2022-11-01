import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'topic-list', pathMatch:"full" },
  { path: 'topic-list', component: TopicListComponent },
  { path: 'create-topic/:topic-id', component: CreateTopicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
