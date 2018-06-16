import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  storeReturnURL(returnUrl) {
    sessionStorage.setItem('returnUrl', returnUrl);
  }
  getReturnURL() {
    return sessionStorage.getItem('returnUrl');
  }
  deleteReturnURL() {
    sessionStorage.removeItem('returnURL');
  }
  storeToken(token) {
    sessionStorage.setItem('token', token);
  }
  getToken() {
    return sessionStorage.getItem('token');
  }
  removeToken() {
    sessionStorage.removeItem('token');
  }
}
