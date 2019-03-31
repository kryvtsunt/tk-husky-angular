import { Component, OnInit } from '@angular/core';
import { OrgServiceClient } from '../services/org.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from "../services/user.service.client";
import { EventServiceClient } from '../services/event.service.client';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor( private router: Router, private orgService: OrgServiceClient,
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceClient,
    private eventService: EventServiceClient) { }

  orgId : String;
  org: {};
  upcomingEvents = [];

  nallert(){
    alert("The functionality is not implemented yet")
  }
  ngOnInit() {
    this.userService.profile().then(user => {
      this.orgId = user._id;
      this.findAllUpcomingEvents(this.orgId);
      this.orgService.findorgById(this.orgId)
        .then(org => {
          this.org = org;
        });
    });
  }

  //upcoming Events

  findAllUpcomingEvents(orgId){
    console.log("inside find all upcoming events")
    this.eventService.findAllEventsForOrg(orgId)
      .then((response) => {
        console.log("inside find all upcoming events111")
        console.log(response)
        this.upcomingEvents = response;
    });
  }

  confirmDelete = (event) => {
    console.log("Event Delete", event);
    this.eventService.deleteEvent(event._id)
    .then( response => {
      this.findAllUpcomingEvents(this.orgId);
    })
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
}
