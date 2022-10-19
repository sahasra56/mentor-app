import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewportScroller } from '@angular/common';

import { PodcastService } from '../../podcast.service';
import { AuthService, SnackbarService } from 'src/app/core/services';

import { Podcast } from '../../interfaces/podcast.interface';
import { PodcastFeed } from '../../interfaces/podcast-feed.interface';
import { User } from 'src/app/core/models';
import { Response } from "src/app/core/models/response.model";

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit {

  isContentAvailable: boolean = true;
  feed!: PodcastFeed;
  feedUrl: string = `https://feeds.soundcloud.com/users/soundcloud:users:73356400/sounds.rss`;
  userInfo!: User;
  podcasts$!: any[];

  constructor(
    private podcastService: PodcastService,
    private authService: AuthService,
    private snackbarService: SnackbarService
  ) { }

  async ngOnInit() {
    this.userInfo = await this.authService.getUserInfo();
    this.getPodcasts();
    setTimeout(() => {
      this.readPodcasts();  
    }, 2000);
    // this.getPodcast();
  }

  getPodcast() {
    this.podcastService.getPodcast(this.feedUrl).subscribe(feed => {
      this.feed = feed;
    });
  }

  getPodcasts() {
    this.podcastService.getPodcasts().subscribe((res: Response) => {
      this.podcasts$ = res?.data;
    });
  }

  playEpisode(episode: Podcast) {
    (document.getElementById('player') as HTMLAudioElement).src = episode.enclosure.link;
    (document.getElementById('player') as HTMLAudioElement).play();
    console.log('playing: ' + episode.enclosure.link);
  }

  secondsToMinutes(time: number = 0) {
    return Math.floor(time / 60) + ':' + Math.floor(time % 60);
  }

  handleInformClick() {
    this.podcastService.informNewPodcastIsAvailable({}).subscribe((res: Response) => {
      this.snackbarService.openSnackBar(res?.message || '', 'Close', 'success-snackbar');
    });
  }

  readPodcasts() {
    this.podcastService.readPodcasts().subscribe((res: Response) => {
      // this.snackbarService.openSnackBar(res?.message || '', 'Close', 'success-snackbar');
    });
  }

}
