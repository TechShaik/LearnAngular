import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '07.ComponentCommunication';

  tasks:string[]=["task 1", "task 2", "task 3", "task 4", "task 5"];

  deleteTask(task:string){
    this.tasks=this.tasks.filter((t)=> t !== task);
  }
}
