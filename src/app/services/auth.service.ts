import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService {   
// private URL =  'https://api-pac.herokuapp.com/api'
  private URL = `http://localhost:4000/api`
 
constructor(
  private http: HttpClient,
  private router: Router
  ) { }

signUp(user){
  return this.http.post<any>(this.URL + '/signup', user);

}

signIn(user){
  return this.http.post<any>(this.URL + '/signin', user);

}
loggedIn(){//console.log(localStorage.getItem('token'));
  return !!localStorage.getItem('token');
}

getToken(){
  return localStorage.getItem('token');
}
logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/signin']);
}
}
