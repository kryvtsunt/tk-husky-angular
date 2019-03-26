import { Component, OnInit } from '@angular/core';
import { OrgServiceClient } from '../services/org.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor( private router: Router, private orgService: OrgServiceClient,private activatedRoute: ActivatedRoute, private userService: UserServiceClient) { }

  orgId : String;
  org: {};

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.orgId = params['orgId'];
    });
   console.log(this.orgId);

    this.orgService.findorgById(this.orgId)
      .then(org => {
        console.log(org);
        this.org = org;
        console.log(this.org);
      });
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
