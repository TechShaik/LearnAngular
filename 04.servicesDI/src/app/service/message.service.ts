import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';  
import { HttpParams } from '@angular/common/http';
import { students } from '../interfaces/students.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
private url="http://localhost:8081/student/all";
private pagedUrl="http://localhost:8081/student/pagedData";
private studentNameUrl="http://localhost:8081/student/byName";
private studentIdUrl="http://localhost:8081/student";

  constructor(private http:HttpClient) { }

  getMessage(): string[] {
    return ["shaiksha" , "suhail", "shahid", "manohar"];
}

getPagedData(page: number, size: number, sortBy: string, ascending: boolean): Observable<students[]> {
  let params = new HttpParams()
    .set('page', page)
    .set('size', size)
    .set('sortBy', sortBy)
    .set('ascending', ascending.toString());  

  return this.http.get<students[]>(this.pagedUrl, { params });
}

getStudents(): Observable<students[]> {
  return this.http.get<students[]>(this.url);
   
}
getStudentById(id: number): Observable<students> {
  return this.http.get<students>(`${this.studentIdUrl}/${id}`);  
}


getStudentByName(name: string): Observable<students> {
  return this.http.get<students>(`${this.studentNameUrl}?name=${name}`);
}



}