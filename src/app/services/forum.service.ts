import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from '../models/Forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  url: string = 'http://localhost:3000/api/forums'
  constructor(private http: HttpClient) { }

  getForumsByCategory(category) {
    return this.http.get<Forum[]>(`${this.url}/byCategory/${category}`);
  }


}
