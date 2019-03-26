import { Component, OnInit } from '@angular/core';
import { EventServiceClient } from '../services/event.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkServiceClient } from '../services/bookmark.service.client';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventService: EventServiceClient,
    private bookmarkService:BookmarkServiceClient,
    private userService:UserServiceClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  eventId : String;
  event: {};
  isRegistered : boolean;
  registerBtnText = "Register";

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

  logout= () => {
  
    this.userService.logout().then(()=> {
      this.router.navigate(['login']);
    });
  }

  
  registerForEvent = eventId => {
   
    this.isRegistered = ! this.isRegistered;
    this.registerBtnText = (this.isRegistered) ? "Unregister" : "Register";
    //TODO: invoke DB
    alert("Registration feature still under construction. Once registered your profile icon will appear in the list of icons below the 'Register' button");
  }

  bookmark = event => {
    //event.isBookmarked = !event.isBookmarked;
   
   if(event.isBookmarked){
      this.bookmarkService.unbookmark(event).then((response)=>{
        event.isBookmarked = false;
      });
    }
    else{
      this.bookmarkService.bookmark(event).then((response)=>{
        event.isBookmarked = true;
      });
    }
  }

}
