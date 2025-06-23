import { Component,Injectable,OnInit } from '@angular/core';
import { MessageService } from './service/message.service';
import { HttpClient } from '@angular/common/http'; 
import { students } from './interfaces/students.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  std: students = { name: '', branch: '' };
  pagedData: students[] = [];
     title:string="services";
  // Pagination variables
  currentPage: number = 0;
  pageSize: number = 5;
  sortBy: string = 'id';
  ascending: boolean = true;
  pageSizes: number[] = [5, 10, 15, 20];

  constructor(private m: MessageService, private http: HttpClient) {}

  ngOnInit() {
    this.fetchPagedData();
  }

  fetchPagedData() {
    this.std = { name: '', branch: '' };
    this.m.getPagedData(this.currentPage, this.pageSize, this.sortBy, this.ascending).subscribe(
      response => {
        this.pagedData = response;
      },
      error => {
        console.error('Error fetching paged data:', error);
      }
    );
  }

  nextPage() {
    this.currentPage++;
    this.fetchPagedData();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.fetchPagedData();
    }
  }

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
