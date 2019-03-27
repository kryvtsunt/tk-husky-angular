
import {Injectable} from '@angular/core';

// const HOST = 'https://huskyneighborhood.herokuapp.com/';
const HOST = 'http://localhost:4000/';

@Injectable()
export class EventServiceClient {

  findEvent(EventId) {
    return fetch(HOST + 'api/HNbhood/' + EventId, {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      });
  }

  createEvent(toCreateEvent) {

    console.log()
    return fetch(HOST + 'api/HNbhood/user/1/event', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toCreateEvent)
    })
      .then(response => {
        return response.json();
      });
  }

  deleteEvent(EventId) {
    return fetch(HOST + 'api/HNbhood/Event/' + EventId, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      });
  }

  updateEvent(EventId, Event) {
    return fetch(HOST + 'api/HNbhood/Event/' + EventId, {
      body: JSON.stringify(Event),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      });
  }

  findAllEvents() {
    return fetch(HOST + 'api/HNbhood/')
      .then(response => {
        return response.json();
      });
  }
}
