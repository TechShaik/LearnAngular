import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructureDirectives';
  user:string="Shaiksha";
  message:string="Please log in to veiw content";
  isLoggedin:boolean=true;

  array:string[]=["shaiksha","sai","sai krishna","sai kumar","sai kiran"];

  grade:string="A"
}
