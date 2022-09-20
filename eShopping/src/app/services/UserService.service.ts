import { User } from "../models/User";

export class UserService {
  user: User[];
  
  constructor() {
    this.user = [];
  }

  addUsers(muser: User) {
    this.user.push(muser);
  }

  getCart() {
    return this.user;
  }

  Login(uname: string, pwd: string) {
    for (var i = 0; i < this.user.length; i++) {
      if (this.user[i].Username == uname && this.user[i].password == pwd) {
        return 1;
      }
      else {
        return 0;
      }
    }
    return 0;
  }
}
