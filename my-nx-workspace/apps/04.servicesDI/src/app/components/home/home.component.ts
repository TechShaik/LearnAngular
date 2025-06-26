import { Component } from '@angular/core';
import { students } from '../../interfaces/students.interface';
import { MessageService } from '../../service/message.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'; // Import firstValueFrom for async/await usage
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    std: students = { name: '', branch: '' };
    pagedData: students[] = [];
       title:string="services";
     
  
    constructor(private m: MessageService, private http: HttpClient) {}
  
   
  
    // getStudentById(id: number) {
    //   this.pagedData = [];
    //   this.m.getStudentById(id).subscribe({
    //    next: (response) => {
    //   this.std = response;
    // },
    //     error:err => {
    //            alert("Student Id not found");

    //     }
    // });
    // }

    async getStudentById(id:number){
    this.pagedData = [];  
     try{
      this.std=await firstValueFrom(this.m.getStudentById(id));
     }
     catch(err){
      console.error('Error fetching student by ID:', err);
      alert('Student ID not found');
     }
  }

   getStudentByName(name: string): void {
  this.pagedData = []; // Clear previous paginated data

  this.m.getStudentByName(name).subscribe({
    next: (response) => {
      this.std = response;
    },
    error: (err) => {
      console.error('Error fetching student by name:', err);
      alert('Student not found');
    }
  });
}


 deleteStudent(id: number): void {
  this.m.deleteStudentById(id).subscribe({
    next: res => {
      alert('Student Deleted!');
    },
    error: err => {
      alert('Student ID not found');
    }
  });
}


  }
  

