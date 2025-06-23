import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 @Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private regUsersUrl = 'http://localhost:8089/users/register';

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.regUsersUrl, user);
  }

}
