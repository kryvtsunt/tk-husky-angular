import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
const HOST = 'https://huskyneighborhood.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

@Injectable()
export class LikeServiceClient {
  like(event) {
    return fetch(HOST + 'api/HNbhood/like/event', {
      body: JSON.stringify(event),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  unlike(event) {
    return fetch(HOST + 'api/HNbhood/like/event', {
      body: JSON.stringify(event),
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  checkLike(eventId) {
    return fetch(HOST + 'api/HNbhood/like/event/' + eventId , {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then (response => response.json());
  }

  findAllLikedevents(userId) {
    return fetch(HOST + 'api/HNbhood/like/user/' + userId + '/event/', {
      method: 'get',
    })
      .then (response => response.json());
  }

  findUsersWhoLikedevent(eventId) {
    return fetch(HOST + 'api/HNbhood/like/event/' + eventId + '/user/', {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      });
  }
}
