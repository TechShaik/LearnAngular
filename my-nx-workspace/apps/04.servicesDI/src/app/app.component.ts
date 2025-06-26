import { Component,Injectable,OnInit } from '@angular/core';
import { MessageService } from './service/message.service';
import { HttpClient } from '@angular/common/http'; 
import { students } from './interfaces/students.interface';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  std: students = { name: '', branch: '' };
  pagedData: students[] = [];
     title:string="services";
   

  constructor(private m: MessageService, private http: HttpClient) {}

 

  getStudentById(id: number) {
    this.pagedData = [];
    this.m.getStudentById(id).subscribe(
      response => {
        this.std = response;
      },
      error => {
        console.error('Error fetching student by ID:', error);
      }
    );
  }

  getStudentByName(name: string) {
    this.pagedData = [];
    this.m.getStudentByName(name).subscribe(
      response => {
        this.std = response;
      },
      error => {
        console.error('Error fetching student by name:', error);
      }
    );
  }
}
