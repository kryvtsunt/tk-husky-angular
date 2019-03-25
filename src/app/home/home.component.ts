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
          this.bookmarkService.checkBookmark(event._id).then((response)=>{
            console.log(event._id);
            console.log(response);
            event.isBookmarked = response;
          } );

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
    //event.isBookmarked = !event.isBookmarked;
    console.log(event);
   // TODO: uncomment code to invoke DATABASE
   if(event.isBookmarked){
      this.bookmarkService.unbookmark(event).then((response)=>{
        console.log(response);
      });
    }
    else{
      this.bookmarkService.bookmark(event).then((response)=>{
        console.log(response);
      });
    }
  }

  logout= () => {

    this.userService.logout().then(()=> {
      this.router.navigate(['login']);
    });
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }




}
