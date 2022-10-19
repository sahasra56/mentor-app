import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { SnackbarService } from 'src/app/core/services';
import { EventService } from 'src/app/shared/services/event.service';

import { Response } from 'src/app/core/models';
import { Event } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  eventDetails$: any;
  // eventDetails$: Event | undefined;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEventById();
  }

  getEventById() {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEventById(eventId).subscribe((res: Response) => {
      this.eventDetails$ = res?.data;
    });
  }

  handleMarkAsComplete() {
    this.eventService.getEventById(this.eventDetails$?._id || 0).subscribe((res: Response) => {
      this.snackbarService.openSnackBar(res?.message || '', 'Close', 'success-snackbar');
      this.router.navigate(['/events']);
    });
  }

}
