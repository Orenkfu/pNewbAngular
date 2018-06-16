import { Category } from './../models/Category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = 'http://localhost:3000/api/categories';
  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Category[]>(this.url);
  }
}
