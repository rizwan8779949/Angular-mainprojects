import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  isLoggedIn(): boolean {
    return false;
  }
}
