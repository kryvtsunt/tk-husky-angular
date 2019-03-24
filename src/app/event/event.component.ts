import { Component, OnInit } from '@angular/core';
import { EventServiceClient } from '../services/event.service.client';
import { ActivatedRoute } from '@angular/router';
import { BookmarkServiceClient } from '../services/bookmark.service.client';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventService: EventServiceClient,private bookmarkService:BookmarkServiceClient,private activatedRoute: ActivatedRoute) { }

  eventId : String;
  event: {};

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.eventId = params['eventId'];
    });
   console.log(this.eventId);

    this.eventService.findEvent(this.eventId)
      .then(event => {
        //TODO: event.isBookmarked = invoke bookmark service
        event.isBookmarked = false;
        console.log(event);
        this.event = event;
        console.log(this.event);
      });
  }


  bookmark = event => {
    event.isBookmarked = !event.isBookmarked;
    console.log(event);
    //TODO: uncomment code to invoke DATABASE
  //  if(event.isBookmarked){
  //     this.bookmarkService.bookmark(event);
  //   }
  //   else{
  //     this.bookmarkService.unbookmark(event);
  //   }

  }

}
