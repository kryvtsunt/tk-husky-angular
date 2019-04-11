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
  stitle: boolean;
  sdate: boolean;
  itags: boolean;
  today: Date;
  day: Date;
  stags: string[];
  dtags: string[];
  alltags: string[];
  events = [];
  all = []
  word = "";
  hword = "";
  hday: Date;
  htags = [];
  user : {};




  ngOnInit(): void {
    this.today = new Date("2019-04-01");
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
        this.dtags = ["Food", "Academia / Education", "Sports", "Social", "Job / Career", "Spiritual / Ethics", "Outdoor", "Music", "Dance", "Art / Design", "Business", "Engineering", "Health / Wellness", "Law / Politics", "Undergraduate", "Graduate", "Culture", "Fundraiser", "Concert / Show", "Games / Entertainment", "Journalism", "Theatre", "Networking", "Cinematography", "Tech / Innovations", "Charity", "Lecture / Talk", "Competition / Contest", "Environment / Sustainability", "Motivation / Inspiration", "Workshop"];
        this.stags = [];
        this.alltags = this.dtags.slice();
      });
    this.userService.profile().then(user => {
      if (user.role == "org") this.org = true
      else this.org = false
      this.user = user;
    });
  }

  constructor(private userService: UserServiceClient,
    private router: Router,
    private eventService: EventServiceClient,
    private bookmarkService: BookmarkServiceClient
    ) {
  }



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

  search_title() {
    this.events = this.events.filter(event => event.title !== undefined)
      .filter(e => e.title.toLowerCase().includes(this.word.toLowerCase()))
    this.stitle = true;
    this.hword = this.word;
    this.word ="";
  }

  search_date() {
    if (this.day == null) return;
    this.events = this.events.filter(event => event.start_time !== undefined)
      .filter(e => new Date(e.start_time).getDate() == new Date(this.day).getDate()+1);
    this.sdate = true;
    this.hday = this.day;
    this.day = null;

  }

  search_tags() {
    console.log("search");
    this.events = this.events.filter(event => event.tags !== undefined)
      .filter(e => this.cont(e.tags, this.stags));
    this.itags = true;
    this.htags = this.stags.slice();
    this.dtags = this.alltags.slice();
    this.stags = [];



  }

  new_events() {
    this.events = this.all.filter(event => event.start_time !== undefined)
      .filter(e => new Date(e.start_time).getTime() > this.today.getTime())
  }

  old_events() {
    this.events = this.all.filter(event => event.start_time !== undefined)
      .filter(e => new Date(e.start_time).getTime() < this.today.getTime())
  }

  cont(l2, l1){
    for (var i=0; i< l1.length; i++){
      if (!l2.includes(l1[i])) return false;
    }
    return true;
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

  cancel_tags(){
    this.htags = [];
    this.events = this.all.slice();
    this.dtags = this.alltags.slice();
    this.stags = [];
    this.itags = false;
  }

  cancel_title() {
    this.events = this.all.slice();
    this.stitle = false;
    this.hword = "";
  }

  cancel_date() {
    this.events = this.all.slice();
    this.sdate = false;
    this.hday = null;
  }

  cancel_all(){
    window.location.reload();
  }

  sort_upcoming(){
    this.events.sort((e1,e2) => new Date(e1.start_time).getTime() - new Date(e2.start_time).getTime());
  }

  sort_post(){
    this.events.sort((e1,e2) => new Date(e2.last_upd_date).getTime() - new Date(e1.last_upd_date).getTime());
  }

  sort_relevance(){
    this.events.sort((e1,e2) => this.mut(e1.tags, this.user.interests) - this.mut(e2.tags, this.user.interests));
  }

  mut(l2, l1){
    var counter = 0;
    for (var i=0; i< l1.length; i++){
      if (!l2.includes(l1[i])) counter++;
    }
    return counter;
  }



  refresh_events(){
    this.events = this.all.slice();
  }






}
