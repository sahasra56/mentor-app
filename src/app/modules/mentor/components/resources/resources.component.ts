import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Topic } from 'src/app/shared/models/topic.model';

export interface DialogData {
  topicInfo: any;
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  topicInfo!: Topic;
  resourcesAvailable: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<ResourcesComponent>,
    @Inject(MAT_DIALOG_DATA) public resourceData: DialogData
  ) {
    console.log('resourceData', resourceData);
    this.topicInfo = resourceData.topicInfo;
    this.resourcesAvailable = this.topicInfo.resources!.length > 0 || false;
  }

  ngOnInit(): void {
  }

}
