import {Injectable} from '@angular/core';

const HOST = 'https://huskyneighborhood.herokuapp.com/';
//const HOST = 'http://localhost:4000/';

@Injectable()
export class CommentServiceClient {
  addComment(eventId, com, mov) {
    const Comment = {comment: com, event: mov};
    return fetch(HOST + 'api/HNbhood/comment/event/' + eventId, {
      body: JSON.stringify(Comment),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteComment(eventId, userId, rev) {
    const Comment = {comment: rev};
    return fetch(HOST + 'api/HNbhood/comment/event/' + eventId + '/user/' + userId, {
      body: JSON.stringify(Comment),
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findAllComments(eventId) {
    return fetch(HOST + 'api/HNbhood/comment/event/' + eventId, {
      credentials: 'include',
    }). then((response) => response.json());
  }
}
