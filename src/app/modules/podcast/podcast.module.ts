import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PodcastRoutingModule } from './podcast-routing.module';

import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { AddPodcastComponent } from './components/add-podcast/add-podcast.component';

// import { AccessControlDirective } from 'src/app/core/directives/access-control.directive';

@NgModule({
  declarations: [
    PodcastListComponent,
    AddPodcastComponent,
    // AccessControlDirective
  ],
  imports: [
    CommonModule,
    PodcastRoutingModule,
    SharedModule
  ]
})
export class PodcastModule { }
