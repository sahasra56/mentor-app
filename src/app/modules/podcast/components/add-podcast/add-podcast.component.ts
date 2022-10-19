import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PodcastService } from '../../podcast.service';
import { SnackbarService } from 'src/app/core/services';
import { Response } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-add-podcast',
  templateUrl: './add-podcast.component.html',
  styleUrls: ['./add-podcast.component.scss']
})
export class AddPodcastComponent implements OnInit {

  podcastForm!: FormGroup;

  constructor(
    private podcastService: PodcastService ,
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initQuestionForm();
  }

  initQuestionForm() {
    this.podcastForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  handleCreatePodcast() {
    this.podcastService.informNewPodcastIsAvailable(this.podcastForm.value).subscribe((res: Response) => {
      this.snackbarService.openSnackBar(res?.message || '', 'Close', 'success-snackbar');
      this.router.navigate(['podcasts']);
    });
  }

}
