import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  @Input('user') user: User;
  @Output('out') out: EventEmitter<any>;
  constructor(private auth: AuthService) {
    this.out = new EventEmitter();
  }
  isLoggedIn() {
    if (this.auth.isLoggedIn()) {
      this.user = this.setUserFromToken();
      console.log(this.user);
      return true
    } else {
      this.user = null;
      return false;
    }
  }
  setUserFromToken() {
    return this.auth.getUserFromToken();
  }

  logout() {
    this.auth.logout();
    this.out.emit();
  }
  ngOnInit() {
  }

}
