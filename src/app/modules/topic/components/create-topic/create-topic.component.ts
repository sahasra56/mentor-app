import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/core/services';
import { TopicService } from 'src/app/shared/services/topic.service';

import { Topic } from 'src/app/shared/models/topic.model';
import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {

  topicInfo!: Topic;
  topicId!: number;
  topicForm!: FormGroup;
  resources!: any[];
  title: FormControl = new FormControl('');
  link: FormControl = new FormControl('');

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getTopicById();
  }

  getTopicById() {
    this.topicId = Number(this.route.snapshot.paramMap.get('topic-id'));
    this.topicService.getTopicById(this.topicId!).subscribe((res: Response) => {
      this.topicInfo = res?.data;
      this.resources = this.topicInfo.resources!;
      this.initializeForm();
    });
  }

  initializeForm() {
    this.topicForm = new FormGroup({
      _id: new FormControl(this.topicInfo?._id! || this.topicId),
      name: new FormControl(this.topicInfo?.name! || '', Validators.required),
      description: new FormControl(this.topicInfo?.description || '', Validators.required),
      resources: new FormControl(this.topicInfo?.resources || [])
    });
  }

  handleAddResource() {
    this.resources.push({
      title: this.title.value,
      link: this.link.value
    });
    this.topicForm.value.resources = this.resources;
    this.topicForm.markAsDirty();
    this.title.setValue('');
    this.link.setValue('');
  }

  handleRemoveResource(indexValue: number) {
    this.resources.splice(indexValue, 1);
    this.topicForm.value.resources = this.resources;
    this.topicForm.markAsDirty();
  }

  handleSaveTopic() {
    this.topicForm.value.resources = this.resources;
    this.topicService.updateTopic(this.topicForm.value).subscribe((res: Response) => {
      this.snackBar.openSnackBar(res?.message!, 'Close', 'green-snackbar');
      this.router.navigate(['/topic']);
    });
  }
}
