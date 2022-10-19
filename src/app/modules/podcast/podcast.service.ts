import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { HttpService } from 'src/app/core/services';
import { PodcastFeed } from './interfaces/podcast-feed.interface';
import { URLConstants } from 'src/app/core/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  private podcastUrl: string = 'https://api.rss2json.com/v1/api.json?rss_url=';

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) { }

  getPodcastList(term: string): Observable<any> {
    return of([]);
  }

  getPodcast(feedUrl: string) {
    const url = this.podcastUrl + feedUrl;
    return this.http.get(url).pipe(
      map(res => new PodcastFeed(res))
    );
  }

  getPodcasts() {
    return this.httpService.get(URLConstants.GET_PODCASTS_API);
  }

  informNewPodcastIsAvailable(payload: any) {
    return this.httpService.post(URLConstants.INFORM_PODCAST_AVAILABLE_API, payload);
  }

  readPodcasts() {
    return this.httpService.get(URLConstants.READ_PODCASTS_API);
  }
}
