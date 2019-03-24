import {Injectable} from '@angular/core';

 const HOST = 'https://huskyneighborhood.herokuapp.com/';
//const HOST = 'http://localhost:4000/';

@Injectable()
export class UserServiceClient {
  findUserByUsername(username) {
    return fetch(HOST + 'api/HNbhood/user/username/' + username)
      .then(response => response.json());
  }

  findUserByCredentials(username, password) {
    return fetch('http://localhost:4000/api/user/username/' + username + '/password/' + password)
      .then(response => response.json());
  }

  checkStatus() {
    return fetch(HOST + 'api/status',
      {
        credentials: 'include'
      })
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(HOST + 'api/HNbhood/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response =>
      response.json());
  }

  updateUser(user) {
    return fetch(HOST + 'api/user', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response =>
      response.json()
    );
  }

  logout() {
    return fetch(HOST + 'api/HNbhood/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  register(user) {
    return fetch(HOST + 'api/HNbhood/register', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  profile() {
    return fetch(HOST + 'api/HNbhood/profile',
      {
        credentials: 'include'
      })
      .then(response => response.json());
  }

}
