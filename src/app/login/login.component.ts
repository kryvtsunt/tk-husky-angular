import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  credentialsError: boolean;
  noUsernameError: boolean;
  noPasswordError: boolean;

  resetErrors() {
    this.credentialsError = false;
    this.noUsernameError = false;
    this.noPasswordError = false;
  }

  reset() {
    this.username = '';
    this.password = '';
  }


  login() {

    this.resetErrors();
    console.log("login")
    if (this.username.trim() === '') {
      this.noUsernameError = true;

    } else {
      if (this.password.trim() === '') {
        this.noPasswordError = true;
      } else {
        this.service.login(this.username, this.password)
          .then((response) => {
            if (response !== null) {
              console.log(response);
              if(response.role==="org"){
                this.router.navigate(['organization/']);
              }
              else{
                this.router.navigate(['home']);
              }

            } else {
              this.credentialsError = true;
            }
          });
      }
    }
  }

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  ngOnInit() {
    this.reset();
    this.resetErrors();
  }

}
