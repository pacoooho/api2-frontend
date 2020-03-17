import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: ''
  };
  err = ''
  constructor(
    private authService: AuthService
    ,private router: Router
    ) { }

  ngOnInit() {
  }
signIn(){
  this.authService.signIn(this.user)
  .subscribe(
    res=> {
      console.log("res.token ",res.token);
    localStorage.setItem('token', res.token);
    console.log("localStorage ", localStorage.getItem('token'))
    this.err = '';
    this.router.navigate(['/private'])
    },
    er=>{
      console.log("er", er.error);
      this.err = er.error.message;    }
  )
}
}
