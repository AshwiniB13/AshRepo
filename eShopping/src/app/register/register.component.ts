//import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
//import { User } from '../models/User';
//import { UserService } from '../services/UserService.service';
//import { ValidatePassword } from './PassValidator';

//@Component({
//  selector: 'app-register',
//  templateUrl: './register.component.html',
//  styleUrls: ['./register.component.css']
//})
//export class RegisterComponent implements OnInit {


//  result: number = 0;
//  user: User;
//  rePassStr: string;
//  userForm: FormGroup;
//  constructor(private userService: UserService, private router: Router) {
//    ////recative validation
//    //this.userForm = new FormGroup({
//    //  uname: new FormControl(null, Validators.required),
//    //  pwd: new FormControl(null, Validators.required),
//    //  rpwd: new FormControl(null, Validators.required)
//    //})

//    //custom validation
//    this.userForm = new FormGroup({
//      uname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
//      pwd: new FormControl(null, ValidatePassword.validatePassword()),
//      rpwd: new FormControl(null, Validators.required)
//    })
//  }

//  public get uname(): any {
//    return this.userForm.get('uname');
//  }

//  public get pwd(): any {
//    return this.userForm.get('pwd');
//  }

//  public get rpwd(): any {
//    return this.userForm.get('rpwd');
//  }

//  register(uname: string, pwd: string) {

//    console.log(this.userForm);   

//    if (this.userForm.valid) {
//      this.user = new User(uname, pwd);
//      this.userService.addUsers(this.user);
//      alert('Registration success');
//      this.router.navigate(['login'])
//    }
//    else {
//      alert('please check values');
//    }
//  }

//  ngOnInit(): void {
//  }

//}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { ValidatePassword } from './PassValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  encodedPass: string;
  user: User;
  rePassStr: string;
  userForm: FormGroup;
  constructor() {
    this.userForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, ValidatePassword.validatePassword()),
      rePass: new FormControl(null, Validators.required)
    })
  }
  encodePass() {
    console.log(this.password)
    this.encodedPass = btoa(this.password.value)
    console.log(this.encodedPass);

  }
  public get username() {
    return this.userForm.get('username');
  }
  public get password() {
    return this.userForm.get('password');
  }
  public get rePass() {
    return this.userForm.get('rePass');
  }

  ngOnInit(): void {
  }
  register() {
    this.user = new User();
    this.user.Username = this.username.value;
    this.user.password = atob(this.encodedPass);
    localStorage.setItem('un', this.user.Username);
    console.log(this.user);
    console.log(this.userForm);
  }

}
