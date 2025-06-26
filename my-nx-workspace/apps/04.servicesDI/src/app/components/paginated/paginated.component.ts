import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { students } from '../../interfaces/students.interface';
import { MessageService } from '../../service/message.service';
 
@Component({
  selector: 'paginated',
  templateUrl: './paginated.component.html',
  styleUrls: ['./paginated.component.css']
})
export class PaginatedComponent implements OnInit {

    std: students = { name: '', branch: '' };
    pagedData: students[] = [];
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

 }
