import { CategoryService } from './../../services/category.service';
import { ForumService } from './../../services/forum.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  panelOpenState: boolean = false;

  constructor(
    private forumService: ForumService,
    private categoryService: CategoryService) { }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(res => {
      console.log(res);
      this.categories = res;
    })
  }

  ngOnInit() {
    this.loadCategories();
  }

}
