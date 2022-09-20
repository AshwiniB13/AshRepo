import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/UserService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: number = 0;
  user: User;
  loginForm: FormGroup;
  constructor(private userService: UserService, private router: Router) {
    this.loginForm = new FormGroup({
      uname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      pwd: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  public get uname(): any {
    return this.loginForm.get('uname');
  }

  public get pwd(): any {
    return this.loginForm.get('pwd');
  }

  login(uname: any,pwd:any) {
    console.log("login called", uname.value, pwd.value);
    this.result = this.userService.Login(uname.value,pwd.value);
    if (this.result == 0)
      alert("Login Failed");
    else {
      alert("Login success");
      this.router.navigate(['products'])
    }
  }

  ngOnInit(): void {
  }

}
