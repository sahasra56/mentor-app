import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

// import { TaskService } from 'src/app/modules/tasks/task.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  taskCompletSubscription: any;
  taskRefreshSubscription: any;

  constructor(
    // private taskService: TaskService,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) { }

  ngOnInit(): void {
    // this.initiateSubscriptions();
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  // initiateSubscriptions() {
  //   this.taskCompletSubscription = this.taskService.getTaskCompletedEmitter()
  //     .subscribe(() => this.handleCloseTask());
    
  //   this.taskRefreshSubscription = this.taskService.getRefreshTaskEmitter()
  //     .subscribe(() => {
  //       this.handleCloseTask();
  //     });
  // }

  handleCloseTask(): void {
    this._bottomSheetRef.dismiss();
  }
}
