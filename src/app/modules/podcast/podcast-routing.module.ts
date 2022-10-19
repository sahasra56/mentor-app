import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { AddPodcastComponent } from './components/add-podcast/add-podcast.component';

const routes: Routes = [
  { path: '', redirectTo: 'podcasts-list', pathMatch: 'full' },
  { path: 'podcasts-list', component: PodcastListComponent },
  { path: 'add-podcast', component: AddPodcastComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule { }
