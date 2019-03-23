import {Injectable} from '@angular/core';

const HOST = 'https://huskyneighborhood.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

@Injectable()
export class RegistrationServiceClient {

  registration(event) {
    return fetch(HOST + 'api/HNbhood/registration/event', {
      body: JSON.stringify(event),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  unregistration(event) {
    return fetch(HOST + 'api/HNbhood/registration/event', {
      body: JSON.stringify(event),
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  checkregistration(eventId) {
    return fetch(HOST + 'api/HNbhood/registration/event/' + eventId + '/check', {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then (response => response.json());
  }

  findAllregistrationedevents(userId) {
    return fetch(HOST + 'api/HNbhood/registration/user/' + userId + '/event/', {
      method: 'get',
    })
      .then (response => response.json());
  }
}
