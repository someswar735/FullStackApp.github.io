// user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetails: any;

  constructor() { }

  setUserDetails(userDetails: any) {
    this.userDetails = userDetails;
  }

  getUserDetails() {
    return this.userDetails;
  }
}
