import { Component, OnInit } from '@angular/core';
import { EventServiceClient } from '../services/event.service.client';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event_name: String;
  event_description: String;
  event_location: String;
  start_date: String;
  end_date: String;
  start_time: String;
  end_time: String;

  constructor(private router: Router,
              private eventService: EventServiceClient) { }


  postEvent() {
    console.log("inside postEvent");
    var toCreateEvent = {
      title: this.event_name,
      description: this.event_description,
      venue : this.event_location,
      start_time : new Date(this.start_date + 'T' + this.start_time),
      end_time : new Date(this.end_date + 'T' + this.end_time),
      overview: this.event_description,
      last_upd_date:Date.now();
    }

    this.eventService.createEvent(toCreateEvent)
      .then(event => {
        console.log(event);
        this.router.navigate(['home']);
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
  }

  ngOnInit() {
  }

}
