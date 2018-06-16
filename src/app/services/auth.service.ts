import { LoginClient } from './../models/LoginClient';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "http://localhost:3000/api/auth";
  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  login(user: LoginClient): any {

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    this.storage.storeReturnURL(returnUrl);
    return this.http.post<User>(this.url, user).pipe(
      map(response => {
        if (response['token']) {
          this.storage.storeToken(response['token']);
          return true;
        }
        return false;
      })
    );
  }

  successLogin() {
    this.router.navigate(['/forums']);
  }
  getUserFromToken(): User {
    const token = this.storage.getToken();
    if (token)
      return decode(token);
    else return null;
  }
  logout(): any {
    this.storage.removeToken();
  }
  //method is invoked every tick to see if user is logged in
  isLoggedIn() {
    const token = this.storage.getToken();

    // const decoded = this.jwtHelper.decodeToken(token);
    // console.log(this.isTokenExpired(decoded.exp));
    return token ? true : false;
  }
}
