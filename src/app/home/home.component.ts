import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
//import {} from '@types/googlemaps';
import { Router } from '@angular/router';
import { EventServiceClient } from '../services/event.service.client';
import { BookmarkServiceClient } from '../services/bookmark.service.client';
import {User} from "../models/user.model.client";


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
  alltags: string[];
  events = [];
  all = []
  word = "";
  hword = "";
  hday: Date;
  htags = [];
  user : User;
  type: string;




  ngOnInit(): void {
    this.today = new Date("2019-04-01");
    this.type = "None";
    this.eventService.findAllEvents()
      .then(events => {

        events.forEach(event => {
          this.bookmarkService.checkBookmark(event._id).then((response)=>{
            event.isBookmarked = response;
          } );

        });
        this.day = null;
        console.log(events);
        this.all = events.slice();
        this.new_events();
        this.sort_relevance();
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
    var r = confirm("Are you sure you want to logout?");
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
    if (this.word == "") return;
    this.events = this.events.filter(event => event.title !== undefined && event.description !== null)
      .filter(e => e.title.toLowerCase().includes(this.word.toLowerCase()) || e.description.toLowerCase().includes(this.word.toLowerCase()))
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
    if (this.stags.length <=0) return;
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

  refresh_tags(){
    this.dtags = this.alltags.slice();
    this.stags = [];
  }

  cancel_tags(){
    this.htags = [];
    this.events = this.all.slice();
    this.dtags = this.alltags.slice();
    this.stags = [];
    this.itags = false;
    this.word = this.hword;
    this.day = this.hday;
    this.search_title();
    this.search_date();
  }

  cancel_title() {
    this.events = this.all.slice();
    this.stitle = false;
    this.hword = "";
    this.stags = this.htags;
    this.day = this.hday;
    this.search_tags();
    this.search_date();
  }

  cancel_date() {
    this.events = this.all.slice();
    this.sdate = false;
    this.hday = null;
    this.word = this.hword;
    this.stags = this.htags;
    this.search_title();
    this.search_tags();
  }

  cancel_all(){
    window.location.reload();
  }

  sort_upcoming(){
    this.type = "Event Date"
    this.events.sort((e1,e2) => new Date(e1.start_time).getTime() - new Date(e2.start_time).getTime());
  }

  sort_post(){
    this.type = "Post Date"
    this.events.sort((e1,e2) => new Date(e2.last_upd_date).getTime() - new Date(e1.last_upd_date).getTime());
  }

  sort_relevance(){
    if (this.user.interests.length <= 0) return;
    this.type = "Relevance";
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
    this.type="None";
  }






}
