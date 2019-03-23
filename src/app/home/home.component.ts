import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
//import {} from '@types/googlemaps';
import { Router } from '@angular/router';
import { EventServiceClient } from '../services/event.service.client';
import { BookmarkServiceClient } from '../services/bookmark.service.client';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  ngOnInit(): void {
    
    this.eventService.findAllEvents()
      .then(events => {

        events.forEach(event => {
          event.isBookmarked = true;
        });
        console.log(events);
        this.events = events;
      });
  }

  constructor(private userService: UserServiceClient, 
    private router: Router, 
    private eventService: EventServiceClient,
    private bookmarkService: BookmarkServiceClient
    ) {
  }


  events = [];

  viewEvent = eventId => {
    //console.log(eventId);
    this.router.navigate(['/event/' + eventId]);
  }

  bookmark = event => {
    event.isBookmarked = !event.isBookmarked;
    console.log(event);
    //TODO: invoke DATABASE
   // this.router.navigate(['/event/' + eventId]);
  }




}
