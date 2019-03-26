import { Component, OnInit } from '@angular/core';
import { EventServiceClient } from '../services/event.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkServiceClient } from '../services/bookmark.service.client';
import { UserServiceClient } from '../services/user.service.client';
import {LikeServiceClient} from "../services/like.service.client";

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
              private registerService: LikeServiceClient,
    private router: Router) { }

  eventId : String;
  event: {};
  isRegistered : boolean;
  registerBtnText = "Register";
  liked = false;
  bookmarked = false;

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
        this.checkLike();
        this.checkBookmark();
      });
  }

  logout= () => {

    this.userService.logout().then(()=> {
      this.router.navigate(['login']);
    });
  }


  registerForEvent() {

    this.isRegistered = ! this.isRegistered;
    this.registerBtnText = (this.isRegistered) ? "Unregister" : "Register";
     if (this.liked){
       this.unlike()

     } else {
       this.like()
     }
    //TODO: invoke DB
    // alert("Registration feature still under construction. Once registered your profile icon will appear in the list of icons below the 'Register' button");

  }

  bookmarkEvent() {
    //event.isBookmarked = !event.isBookmarked;

   if(this.bookmarked){
      this.unbookmark()
    }
    else{
      this.bookmark()
    }
  }

  checkLike() {
    this.registerService.checkLike(this.eventId).then((response) => {
      this.liked = response;
    })
  }

  like() {
    this.registerService.like(this.event)
      .then(() => {
        this.checkLike();
        // this.findUsersWhoLikedMovie();
      });
  }

  unlike() {
    this.registerService.unlike(this.event)
      .then(() => {
        this.checkLike();
        // this.findUsersWhoLikedMovie();
      });
  }

  checkBookmark() {
    this.bookmarkService.checkBookmark(this.eventId).then((response) => {
      this.bookmarked = response;
    })
  }

  bookmark() {
    this.bookmarkService.bookmark(this.event)
      .then(() => {
        this.checkBookmark();
      });
  }

  unbookmark() {
    this.bookmarkService.unbookmark(this.event)
      .then(() => {
        this.checkBookmark();

      });
  }
}
