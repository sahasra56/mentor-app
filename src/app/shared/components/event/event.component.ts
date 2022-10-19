import { Component, OnInit, Input } from '@angular/core';

import { EventService } from 'src/app/shared/services/event.service';

import { Event } from 'src/app/shared/models/event.model';
import { Response } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() direction: string = '';
  @Input() limit: number = 0;
  events$: Event[] = [];
  
  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents(this.limit).subscribe((res: Response) => {
      this.events$ = res?.data;
    });
  }

}
