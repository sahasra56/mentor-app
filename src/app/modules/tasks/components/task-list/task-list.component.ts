import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { TaskService } from 'src/app/modules/tasks/task.service';
import { Task } from 'src/app/modules/tasks/task.interface';
import { Response } from 'src/app/core/models/response.model';

import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  isContentAvailable: boolean = false;
  value: string = '';

  tasks$: Task[] = [];
  subscription: any;

  constructor(
    private taskService: TaskService,
    private _bottomSheet: MatBottomSheet
  ) {
    this.initiateSubscriptions();
  }

  ngOnInit(): void {
    // this.tasks$ = this.taskService.TASKS;
    this.getTasks();
  }

  initiateSubscriptions() {
    this.subscription = this.taskService.getTaskCompletedEmitter()
      .subscribe(() => this.getTasks());
  }

  getTasks() {
    this.taskService.getTasks().subscribe((res: Response) => {
      this.tasks$ = res?.data;
      this.isContentAvailable = this.tasks$.length > 0 ? true : false;
    });
  }

  handleTaskCompleted(task: Task) {
    this.taskService.completeTask(task).subscribe((res: Response) => {
      this.getTasks();
    });
  }

  handleDeleteClick(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe((res: Response) => {
      this.getTasks();
    });
  }

  handleAddTask(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

}
