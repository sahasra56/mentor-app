import { Component, OnInit } from '@angular/core';

// import { TaskService } from 'src/app/modules/tasks/task.service';
import { SnackbarService } from 'src/app/core/services';

// import { Task } from 'src/app/modules/tasks/task.interface';
import { Response } from 'src/app/core/models/response.model';

// import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  value: string = '';

  constructor(
    // private taskService: TaskService,
    private snackbarService: SnackbarService,
    // private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) { }

  ngOnInit(): void {
  }

  handleCreateTask() {
    // let event: Task = { description: this.value };
    // this.taskService.createTask(event).subscribe((res: Response) => {
    //   this.snackbarService.openSnackBar(res?.message || '', 'Close', 'success-snackbar');
    //   this.value = '';
    //   this.taskService.taskCompleted();
    // });
  }

  handleCancelTask() {
    // this.taskService.taskCanceled(false);
  }

}
