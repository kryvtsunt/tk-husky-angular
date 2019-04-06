import {Injectable} from '@angular/core';

 const HOST = 'https://huskyneighborhood.herokuapp.com/';
//const HOST = 'http://localhost:4000/';

@Injectable()
export class ActivityServiceClient {

  findAllActivities() {
    return fetch(HOST + 'api/HNbhood/activity/')
      .then(response => {
        return response.json();
      });
  }

}
