import {Injectable} from '@angular/core';

 const HOST = 'https://huskyneighborhood.herokuapp.com/';
//const HOST = 'http://localhost:4000/';

import {Org} from '../models/org.model.client';

@Injectable()
export class OrgServiceClient {

  findAllorgs() {
    return fetch(HOST + 'api/HNbhood/org/')
      .then(response => response.json());

  }
  findorgById(orgId) {
    return fetch(HOST + 'api/HNbhood/org/' + orgId)
      .then(response => response.json());
  }

  deleteorgById(orgId) {
    return fetch(HOST + 'api/HNbhood/org/' + orgId, {
      method: 'delete'
    })
      .then(response => response.json());
  }
  updateorg(org) {
    return fetch(HOST + 'api/HNbhood/org/update', {
      body: JSON.stringify(org),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response =>
      response.json()
    );
  }

  updateorgById(orgId, org) {
    return fetch(HOST + 'api/HNbhood/org/' + orgId, {
      body: JSON.stringify(org),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response =>
      response.json()
    );
  }
  createorg(org: Org) {
    return fetch(HOST + 'api/HNbhood/org', {
      body: JSON.stringify(org),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
