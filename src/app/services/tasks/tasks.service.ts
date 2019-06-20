import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private TASKS_URL:string = `${ environment.BASE_URL }/tasks`;

  constructor(
    private httpClient:HttpClient
  ) { }

  getAll() {
    return this.httpClient.get(this.TASKS_URL);
  }

  getById(id:number) {
    let url = `${ this.TASKS_URL }/${ id }`;
    return this.httpClient.get(url);
  }

  create(data:{name:string}) {
    return this.httpClient.post(this.TASKS_URL, data);
  }

  editById(id:number, data:{name:string}) {
    let url = `${ this.TASKS_URL }/${ id }`;
    return this.httpClient.put(url, data);
  }

  deleteById(id:number) {
    let url = `${ this.TASKS_URL }/${ id }`;
    return this.httpClient.delete(url);
  }

}
