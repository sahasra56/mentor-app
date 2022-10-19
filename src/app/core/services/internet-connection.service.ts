import { Injectable } from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';

@Injectable()
export class InternetConnectionService {

  // private internetConnectivitySource: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  onlineEvent!: Observable<Event>;
  offlineEvent!: Observable<Event>;

  subscriptions: Subscription[] = [];
  /* Return an observable with a boolean based on internet connection status */
  constructor() {

  }

  checkInternetConnection(){
    return new Observable((observer) => {
      // observable execution
      this.onlineEvent = fromEvent(window, 'online');
      this.offlineEvent = fromEvent(window, 'offline');

      this.subscriptions.push(this.onlineEvent.subscribe(e => {
        observer.next(true);
        // observer.complete();
      }));

      this.subscriptions.push(this.offlineEvent.subscribe(e => {
        observer.next(false);
        // observer.complete();
      }));
    });
  }
}
