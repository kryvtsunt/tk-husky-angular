import { Component, OnInit } from '@angular/core';
import { OrgServiceClient } from '../services/org.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(private orgService: OrgServiceClient,private activatedRoute: ActivatedRoute) { }

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

}
