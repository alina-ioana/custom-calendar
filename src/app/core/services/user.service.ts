import { Injectable } from '@angular/core';

import StorageHelper from '../helpers/storage.helper';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser;
  private currentUserSource = new Subject<any>();
  currentUser$ = this.currentUserSource.asObservable();

  constructor() { }

  setCurrentUser(currentUser) {
    this.currentUser = currentUser;
    this.currentUserSource.next(currentUser);
    return this.currentUser;
  }

  getCurrentUser(){
    return this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentUser && this.currentUser.isAdmin;
  }

  isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  logout(): void {
    StorageHelper.killSession();
    this.currentUser = null;
  }

}
