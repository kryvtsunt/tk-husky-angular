import { Component, OnInit } from '@angular/core';
import { OrgServiceClient } from '../services/org.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from "../services/user.service.client";
import {EventServiceClient} from "../services/event.service.client";
import {Org} from "../models/org.model.client";
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  user: User = new User();//sush
  org: Org = new Org();
  upcomingEvents = [];
  orgId : String;
  events = [];
  //org: {};

  constructor( private router: Router,
               private orgService: OrgServiceClient,
               private activatedRoute: ActivatedRoute,
               private userService: UserServiceClient,
               private eventService: EventServiceClient) { }


  nallert(){
    alert("The functionality is not implemented yet")
  }


  ngOnInit() {
    this.userService.profile().then(user => {
      this.orgId = user._id;
      //sush

      this.findAllUpcomingEvents();
    });
   console.log(this.orgId);

    this.orgService.findorgById(this.orgId)
      .then(org => {
        console.log(org);
        this.org = org;
        console.log(this.org);
      });
  }


  //upcoming Events

  findAllUpcomingEvents(){
    console.log("inside find all upcoming events")
    this.eventService.findEvent(this.orgId)
      .then((response) => {
        console.log("inside find all upcoming events111")
        console.log(response)
        this.upcomingEvents = response;
    });
  }

  setupcoming(){
    this.events = this.upcomingEvents;
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
