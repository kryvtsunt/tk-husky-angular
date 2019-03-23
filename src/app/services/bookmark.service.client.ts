import {Injectable} from '@angular/core';

const HOST = 'https://huskyneighborhood.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

@Injectable()
export class BookmarkServiceClient {

  bookmark(event) {
    return fetch(HOST + 'api/HNbhood/bookmark/event', {
      body: JSON.stringify(event),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  unbookmark(event) {
    return fetch(HOST + 'api/HNbhood/bookmark/event', {
      body: JSON.stringify(event),
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  checkBookmark(eventId) {
    return fetch(HOST + 'api/HNbhood/bookmark/event/' + eventId + '/check', {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then (response => response.json());
  }

  findAllBookmarkedevents(userId) {
    return fetch(HOST + 'api/HNbhood/bookmark/user/' + userId + '/event/', {
      method: 'get',
    })
      .then (response => response.json());
  }
}
