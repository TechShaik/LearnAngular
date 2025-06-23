import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  private getBooksUrl = 'http://localhost:8089/books/show';

  getAllBooks():Observable<any[]> {
    return this.http.get<any[]>(this.getBooksUrl);

  }
}
