import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-manage-task',
  templateUrl: './manage-task.component.html',
  styles: []
})
export class ManageTaskComponent implements OnInit, OnChanges {

  @Input() title:string;
  formTask:FormGroup;
  @Input() task:Task;
  @Output() reloadTasks = new EventEmitter();

  constructor(
    private _taskService:TasksService,
    private _notificationsService:NotificationsService
  ) {
   }

  ngOnInit() {
    //console.log(this.task);
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initForm();
  }

  initForm() {
    let name = this.task ? this.task.name : '';
    this.formTask = new FormGroup({
      'name': new FormControl(name, [
          Validators.required,
          Validators.minLength(1)
        ]
      )
    });
  }

  execute() {
    if (this.formTask.invalid) {
      this._notificationsService.showWarningMessage('Debe ingresar una tarea');
      return;
    }
    let observable = this.task ? 
      this._taskService.editById(this.task.id, this.formTask.value) :
      this._taskService.create(this.formTask.value);
    observable.subscribe(
      (data:any) => {
        this._notificationsService.showInfoMessage(data.message);
        this.reloadTasks.emit(true);
      }, err => {
        console.error(err);
        this._notificationsService.showErrorMessage(err.error);
      }
    )
  }

}
