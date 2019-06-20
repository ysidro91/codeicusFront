import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material';

import { TasksService } from 'src/app/services/tasks/tasks.service';
import { TablesService } from 'src/app/services/tables/tables.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styles: []
})
export class ShowTasksComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  COLUMNS = ['id', 'name', 'created', 'detail', 'edit', 'trash'];
  @Input() tasks:any;
  @Output() reloadTasks = new EventEmitter();
  @Output() taskData = new EventEmitter();
  currentTask:Task;

  constructor(
    private _taskService:TasksService,
    private _tablesService:TablesService,
    private _notificationsService:NotificationsService,
    private matPaginatorIntl:MatPaginatorIntl
  ) {
    //this.currentTask = null;
    this._tablesService.setTableInternationalization(this.matPaginatorIntl);
   }

  ngOnInit() {
    this.tasks.paginator = this.paginator;
  }

  editTask(data:Task) {
    this.taskData.emit(data);
  }

  viewDetail(task:Task){
    this.currentTask = task;
  }

  delete(id:number) {
    this._taskService.deleteById(id).subscribe(
      (data:any) => {
        //console.log(data);
        if (data.message) {
          this._notificationsService.showInfoMessage(data.message);
          this.reloadTasks.emit(true);
        }
      }, err => {
        console.error(err);
      }
    );
  }

}
