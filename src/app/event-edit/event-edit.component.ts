import { Component, OnInit } from '@angular/core';
import { EventServiceClient } from '../services/event.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import {UserServiceClient} from "../services/user.service.client";



@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  eventId: String;
  event_name: String;
  event_description: String;
  event_location: String;
  event_room: String;
  event_directions: String;
  start_date: String;
  end_date: String;
  start_time: String;
  end_time: String;
  img: String;
  stags: String[];
  dtags: String[];
  alltags: String[];
  editEvent: boolean;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private eventService: EventServiceClient,
              private userService: UserServiceClient) { }


  postEvent() {
    this.userService.profile().then(user => {
      var toCreateEvent = {
        title: this.event_name,
        description: this.event_description,
        venue : this.event_location,
        start_time : new Date(this.start_date + 'T' + this.start_time),
        end_time : new Date(this.end_date + 'T' + this.end_time),
        overview: this.event_description,
        last_upd_date:Date.now(),
        image_path:this.img,
        poster: user._id,
        directions: this.event_directions,
        room: this.event_room,
        tags: this.stags
      };

      this.eventService.createEvent(toCreateEvent)
        .then(event => {
          console.log(event);
          this.router.navigate(['home']);
        });
    });

  }

  updateEvent() {
    console.log("inside updateEvent");
    this.userService.profile().then(user => {
      var toUpdateEvent = {
        title: this.event_name,
        description: this.event_description,
        venue : this.event_location,
        start_time : new Date(this.start_date + 'T' + this.start_time),
        end_time : new Date(this.end_date + 'T' + this.end_time),
        overview: this.event_description,
        last_upd_date:Date.now(),
        image_path:this.img,
        poster: user._id,
        directions: this.event_directions,
        room: this.event_room,
        tags: this.stags
      };

      this.eventService.updateEvent(this.eventId, toUpdateEvent)
        .then(event => {
          this.router.navigate(['home']);
        });
    });
  }

  resetEvent() {
    console.log("inside resetEvent");
    this.event_name = '';
    this.event_description = '';
    this.event_location = '';
    this.start_date = '';
    this.end_date = '';
    this.start_time = '';
    this.end_time = '';
    this.stags = [];
    this.dtags = [];
    this.event_directions = "";
    this.event_room = "";
    this.img = "./assets/library.jpeg"
  }

  ngOnInit() {
    this.img = "./assets/library.jpeg"
    this.dtags = ["Food", "Academia / Education", "Sports", "Social", "Job / Career", "Spiritual / Ethics", "Outdoor", "Music", "Dance", "Art / Design", "Business", "Engineering", "Health / Wellness", "Law / Politics", "Undergraduate", "Graduate", "Culture", "Fundraiser", "Concert / Show", "Games / Entertainment", "Journalism", "Theatre", "Networking", "Cinematography", "Tech / Innovations", "Charity", "Lecture / Talk", "Competition / Contest", "Environment / Sustainability", "Motivation / Inspiration", "Workshop"];
    this.stags = [];
    this.alltags = this.dtags.slice();

    this.activatedRoute.params.subscribe(params => {
      this.eventId = params['eventId'];
    });

    if(this.eventId) {
      this.editEvent = true;
      this.eventService.findEvent(this.eventId)
      .then(event => {

          console.log("To Edit Event", event);

        let localStartDate = new Date(event.start_time);
        let localEndDate = new Date(event.end_time);
        let localStartMonth = "0" + (localStartDate.getMonth()+1);
        let localEndMonth = "0" + (localEndDate.getMonth()+1);

        let localStartDay = "0" + localStartDate.getDate();
        let localEndDay = "0" + localEndDate.getDate();

        let localStartHours = "0" + localStartDate.getHours();
        let localEndHours = "0" + localEndDate.getHours();

        let localStartMinutes = "0" + localStartDate.getMinutes();
        let localEndMinutes = "0" + localEndDate.getMinutes();

        localStartMonth = localStartMonth.slice(-2);
        localEndMonth = localEndMonth.slice(-2);
        localStartDay = localStartDay.slice(-2);
        localEndDay = localEndDay.slice(-2);

        localStartHours = localStartHours.slice(-2);
        localEndHours = localEndHours.slice(-2);

        localStartMinutes = localStartMinutes.slice(-2);
        localEndMinutes = localEndMinutes.slice(-2);

        this.event_name = event.title;
        this.event_description = event.description;
        this.event_location = event.venue;
        this.start_date = localStartDate.getFullYear() + '-' + localStartMonth + '-' + localStartDay;
        this.end_date = localEndDate.getFullYear() + '-' + localEndMonth + '-' + localEndDay;
        this.start_time = localStartHours + ':' + localStartMinutes;
        this.end_time = localEndHours + ':' + localEndMinutes;
        this.stags = event.tags;
        this.dtags = this.alltags.filter( tag => !this.stags.includes(tag))
        this.event_directions = event.directions;
        this.event_room = event.room;
        this.img = event.image_path;

      });
    }

  }

  nallert(){
    alert("The functionality is not implemented yet")
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

  to_stags(t){
    this.stags.push(t);
    this.dtags.splice(this.dtags.indexOf(t), 1);
  }

  to_dtags(t){
    this.dtags.push(t);
    this.stags.splice(this.stags.indexOf(t), 1);
  }

}
