import { Injectable } from '@angular/core';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user?: User;

  constructor() { }

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  sair() {
    this.user = undefined;
  }
}
