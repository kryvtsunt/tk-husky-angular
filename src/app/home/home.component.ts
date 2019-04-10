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

  org: boolean;
  stags: string[];
  dtags: string[];


  ngOnInit(): void {

    this.eventService.findAllEvents()
      .then(events => {

        events.forEach(event => {
          this.bookmarkService.checkBookmark(event._id).then((response)=>{
            event.isBookmarked = response;
          } );

        });
        console.log(events);
        this.events = events.slice();
        this.all = events.slice();
        this.dtags = ["Food", "Academia/Education", "Sport", "Social", "Job & Careers", "Spiritual", "Outdoor", "Music", "Art & Design", "Business", "Engineering", "Health & Wellness", "Law & Politics", "Undergraduate", "Graduate", "Cultural", "Fundraising", "Concert/Show", "Games", "Photo/Video", "Journalism", "Theatre", "Networking", "Free", "Paid"];
        this.stags = [];
      });
    this.userService.profile().then(user => {
      if (user.role == "org") this.org = true
      else this.org = false
    });
  }

  constructor(private userService: UserServiceClient,
    private router: Router,
    private eventService: EventServiceClient,
    private bookmarkService: BookmarkServiceClient
    ) {
  }


  events = [];
  all = []
  word = "";

  viewEvent = eventId => {
    //console.log(eventId);
    this.router.navigate(['/event/' + eventId]);
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

  logout= () => {
    var r = confirm("Are you sure you want to logout!");
    if (r == true) {
      this.userService.logout().then(()=> {
        this.router.navigate(['login']);
      });
    } else {

    }
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  search() {
    console.log(this.word);
    console.log(this.events[0].title)
    this.events = this.events.filter(event => event.title !== undefined)
      .filter(e => e.title.toLowerCase().includes(this.word.toLowerCase()))
    this.word = "";
  }

  alle() {
    this.events = this.all;
  }


  nallert(){
    alert("The functionality is not implemented yet")
  }

  to_stags(t){
    this.stags.push(t);
    this.dtags.splice(this.dtags.indexOf(t), 1);
  }

  to_dtags(t){
    this.dtags.push(t);
    this.stags.splice(this.stags.indexOf(t), 1);
  }






}
