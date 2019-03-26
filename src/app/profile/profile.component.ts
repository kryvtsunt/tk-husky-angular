import { Component, OnInit } from '@angular/core';
import { BookmarkServiceClient } from '../services/bookmark.service.client';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  bookmarkedEvents = [];
  constructor( private bookmarkService: BookmarkServiceClient, 
    private userService : UserServiceClient) { }

  ngOnInit() {

    this.userService.profile().then((user)=> {

      this.bookmarkService.findAllBookmarkedevents(user._id).then((response)=>{
        console.log(response);
        this.bookmarkedEvents  =response;
      })
    })
    
  }

}
