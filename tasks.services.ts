import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
  export class TaskService {
    constructor (private http:Http){
      console.log("Task service Initialized");
    }
      getTasks(){
        return this.http.get('/api/tasks').map(res => res.json());
      }
      addTask(newTask){
        var headers = new Headers();
        headers.append('content-type','application/json');
        return this.http.post('/api/tasks',JSON.stringify(newTask),{headers:headers})
        .map(res => res.json());
      }

      deleteTask(id){
        this.http.delete('/api/task'+id)
        .map(res => res.json());
      }

      updateStatus(task){
        var headers = new Headers();
        headers.append('content-type','application/json');
        return this.http.put('/api/tasks'+tasks._id,JSON.stringify(task),{headers:headers})
        .map(res => res.json());

      }
    }