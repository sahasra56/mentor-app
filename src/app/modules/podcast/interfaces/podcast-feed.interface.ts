import { Podcast } from './podcast.interface';

export class PodcastFeed {

    feed: {
        author: string;
        description: string;
        image: string;
        link: string;
        title: string;
        url: string;
    };
    items: Podcast[];

    constructor(response: any) {
        this.feed = response.feed;
        this.items = response.items;
    }
}