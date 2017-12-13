import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { headers } from '../common/headers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { config } from '../../../environments/environment.config'


export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('admin@strongarm.com', 'adm911'),
  new User('user001@strongarm.com', 'a001')
];

@Injectable()
export class AuthenticationService {
  private _loginUrl: string;
  constructor(
    private _router: Router, public http: HttpClient) {
    this._loginUrl = config.getEnvironmentVariable('endPoint') + 'api/StoresInventory/v1/Login/';
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user) {

    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", user.email);
     if(user.email === 'admin@strongarm.com' )
       localStorage.setItem("Role", "Admin");
       else
       localStorage.setItem("Role", "user");
              
      return true;
    }
    return false;


  }


  checkCredentials() {
    console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['login']);
    }
  }
}
