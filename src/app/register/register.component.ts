import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  username: string;
  password: string;
  password2: string;
  usernameError: boolean;
  passwordError: boolean;
  noUsernameError: boolean;
  noPasswordError: boolean;
  noPassword2Error: boolean;
  email: string;
  // img_path = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100';

  resetErrors() {
    this.usernameError = false;
    this.passwordError = false;
    this.noUsernameError = false;
    this.noPasswordError = false;
    this.noPassword2Error = false;
  }

  reset(){
    this.username = '';
    this.password = '';
    this.password2 = '';
  }

  register() {
    console.log("inside register");
    this.resetErrors();
    if (this.username.trim() === '') {
      this.noUsernameError = true;
    } else {
      if (this.password.trim() === '') {
        this.noPasswordError = true;
      } else {
        if (this.password2.trim() === '') {
          this.noPassword2Error = true;
        } else {
          if (this.password === this.password2) {
            this.service.findUserByUsername(this.username)
              .then((response) => {
                console.log(response);
                if (response === null) {
                  const user = new User();
                  user.username = this.username;
                  user.password = this.password;
                  user.email = this.email;
                  console.log(user);
                  this.service.register(user)
                    .then(() => this.router.navigate(['login']));
                } else {
                  this.usernameError = true;
                  // alert('Username is already taken');
                }
              });
          } else {
            this.passwordError = true;
            // alert('Passwords do not match');
          }
        }
      }
    }
  }

  ngOnInit() {
    this.reset();
    this.resetErrors();
  }

}
