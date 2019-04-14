import { Component, OnInit } from '@angular/core';
import { OrgServiceClient } from '../services/org.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from "../services/user.service.client";
import { EventServiceClient } from '../services/event.service.client';
import {User} from "../models/user.model.client";

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
  user: User;
  upcomingEvents = [];
  edit = false;
  today: Date;
  all = [];
  type: string;

  nallert(){
    alert("The functionality is not implemented yet")
  }
  ngOnInit() {
    this.today = new Date("2019-04-01");
    this.userService.profile().then(user => {
      this.orgId = user._id;
      this.user = user;
      this.findAllUpcomingEvents(this.orgId).then(() => this.new_events());
      this.orgService.findorgById(this.orgId)
        .then(org => {
          this.org = org;
        });
    });
  }

  //upcoming Events

  findAllUpcomingEvents(orgId){
    return this.eventService.findAllEventsForOrg(orgId)
      .then((response) => {
        this.all = response.slice();
      });
  }


  confirmDelete = (event) => {
    var r = confirm("Are you sure you want to delete event?");
    if (r) {
      this.eventService.deleteEvent(event._id)
        .then(response => {
          this.findAllUpcomingEvents(this.orgId).then(() => {
            if (this.type == "old") this.old_events();
            else this.new_events();
          });
        })
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

  switchMode() {
    this.edit = !this.edit;
    console.log(this.user)
  }

  update(){
  this.userService.updateUser(this.user);
  this.edit = !this.edit;
  }

  new_events() {
    this.upcomingEvents = this.all.filter(event => event.start_time !== undefined)
      .filter(e => new Date(e.start_time).getTime() > this.today.getTime())
    this.type = "new";

  }

  old_events() {
    this.upcomingEvents = this.all.filter(event => event.start_time !== undefined)
      .filter(e => new Date(e.start_time).getTime() < this.today.getTime());
    this.type = "old";
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
