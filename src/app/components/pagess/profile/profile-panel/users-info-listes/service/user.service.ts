import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUserProfile(userId: string) {
    const url = `/api/users/${userId}`;
    return this.http.get(url);
  }

}
