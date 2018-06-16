import { Category } from './../../models/Category';
import { ForumService } from './../../services/forum.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Forum } from '../../models/Forum';

@Component({
  selector: 'forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit {

  forums: Forum[];
  @Input('category') category: Category;
  constructor(private forumService: ForumService) { }

  ngOnInit() {
    this.forumService.getForumsByCategory(this.category.name).subscribe(res =>
      this.forums = res
    )
  }

}
