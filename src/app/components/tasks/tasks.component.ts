import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit {

  title:string;
  loadingTasks:boolean;
  showTaskManager:boolean;
  tasksList = new MatTableDataSource();
  taskSelected:Task;
  titleManage:string;

  constructor(
    private _taskService:TasksService,
    private activatedRoute:ActivatedRoute
  ) { 
    this.title = this.activatedRoute.snapshot.data['title'];
    this.setInitValues();
  }

  setInitValues(){
    this.tasksList = new MatTableDataSource();
    this.showTaskManager = false;
    this.loadingTasks = true;
  }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this._taskService.getAll().subscribe(
      (data:Task[]) => {
        if (data.length > 0) {
          this.tasksList.data = data;
        }
        //console.log(data);
      }, err => {
        console.error(err);
      }, () => {
        this.loadingTasks = false;
      }
    )
  }

  reload(value:boolean){
    if (value) {
      this.setInitValues();
      this.loadTasks();
    }
  }

  showTaskEdit(value:Task) {
    //console.log(value);
    this.showTaskManager = true;
    this.taskSelected = value;
    this.titleManage = value ? 'Editar' : 'Crear';
  }



}
