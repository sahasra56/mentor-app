import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SnackbarService } from 'src/app/core/services';
import { EventService } from 'src/app/shared/services/event.service';

import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  eventForm!: FormGroup;
  isLoading: boolean = false;

  data = [
    { name: 'Card', class: 'col-4' },
    { name: 'Card', class: 'col-4' },
    { name: 'Card', class: 'col-4' },
    { name: 'Card', class: 'col-3' },
    { name: 'Card', class: 'col-3' },
    { name: 'Card', class: 'col-3' },
    { name: 'Card', class: 'col-3' },
    { name: 'Card', class: 'col-3' },
    { name: 'Card', class: 'col-3' }
  ];

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private snackbarService: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initEventForm();
  }

  initEventForm() {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      eventDate: [null, Validators.required]
    });
  }

  handleSaveEvent() {
    this.eventService.createEvent(this.eventForm.value).subscribe((res: Response) => {
      this.snackbarService.openSnackBar(res?.message || '', 'Close', 'success-snackbar');
      this.router.navigate(['/events']);
    });
  }

}
