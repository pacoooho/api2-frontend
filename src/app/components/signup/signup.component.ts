import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: ''
  };
  err = ''
  constructor(
    private authService: AuthService
    ,private router: Router ) {

     }


  ngOnInit() {
  }
  signUp() {
    this.authService.signUp(this.user)
      .subscribe(
        res => {
         if (res.token){
          localStorage.setItem('token', res.token);
          console.log("localStorage ", localStorage.getItem('token'))
          this.err = '';
          this.router.navigate(['/private'])
         }
        },

        er => {
          console.log("er", er.error);
          this.err = er.error.message;
        }

      )
  }

}
