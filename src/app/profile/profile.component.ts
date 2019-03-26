import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {Router} from "@angular/router";
import {BookmarkServiceClient} from "../services/bookmark.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {LikeServiceClient} from "../services/like.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();
  profile: boolean;
  edit: boolean;
  originalUser: User = new User();
  admin: boolean;
  bookmarkedEvents = []
  registeredEvenets = []
  events = [];
  followings = [];
  follow: boolean;
  routerLink: string;

  constructor(private router: Router, private service: UserServiceClient,
              private bookmarkService: BookmarkServiceClient, private registerService: LikeServiceClient) { }

  ngOnInit() {
    this.service.profile()
      .then(user => {
          this.service.findUserByUsername(user.username)
            .then(u => {
              this.user = Object.assign({}, u);
              if (user.role === 'user') {
                this.admin = true;
              } else {
                this.admin = false;
              }
              this.findAllBookmarkedEvents();
              this.findAllRegisteredEvents();
            });
      })
  }

  findAllBookmarkedEvents() {
    this.bookmarkService.findAllBookmarkedevents(this.user._id)
      .then((response) => {
        console.log(response)
        this.bookmarkedEvents = response;
        this.setbookmarked();
      });
  }

  findAllRegisteredEvents() {
    this.registerService.findAllLikedevents(this.user._id)
      .then((response) => {
        console.log(response)
        this.registeredEvenets = response;
      });
  }

  setbookmarked() {
    this.events = this.bookmarkedEvents;

  }

  setregistered() {
    this.events = this.registeredEvenets;
  }

}
