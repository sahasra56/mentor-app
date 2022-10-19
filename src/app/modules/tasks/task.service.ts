import { EventEmitter, Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services';

import { URLConstants } from 'src/app/core/constants/url-constants';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public TASKS: Task[] = [{
    _id: 1, description: 'Client review and feedback', isCompleted: true
  }, {
    _id: 2, description: 'Ideation', isCompleted: false
  }, {
    _id: 3, description: 'Implementation', isCompleted: false
  }];

  isTaskCompleted: EventEmitter<boolean> = new EventEmitter();
  refreshTasks: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private httpService: HttpService
  ) { }

  getTasks() {
    return this.httpService.get(URLConstants.GET_TASKS_API);
  }

  createTask(payload: Task) {
    return this.httpService.post(URLConstants.CREATE_TASK_API, payload);
  }
  
  completeTask(payload: any) {
    return this.httpService.put(`${URLConstants.UPDATE_TASK_API}`, payload);
    // this.TASKS.find(obj => obj._id === taskId && (obj.isCompleted = true, true));
  }

  deleteTask(taskId: number) {
    return this.httpService.delete(`${URLConstants.DELETE_TASK_API}/${taskId}`);
  }

  taskCompleted() {
    this.isTaskCompleted.emit(true);
  }

  getTaskCompletedEmitter() {
    return this.isTaskCompleted;
  }

  taskCanceled(refreshTasks: boolean) {
    this.refreshTasks.emit(refreshTasks);
  }

  getRefreshTaskEmitter() {
    return this.refreshTasks;
  }
}
