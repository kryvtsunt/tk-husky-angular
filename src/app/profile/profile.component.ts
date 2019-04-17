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
  admin: boolean;
  bookmarkedEvents = [];
  registeredEvenets = [];
  events = [];
  followings = [];
  follow: boolean;
  routerLink: string;
  edit = false;
  img: string;
  stags: string[];
  dtags: string[];
  alltags: string[];
  today: Date;
  vpassword: string;
  password: string;
  error: boolean;


  constructor(private router: Router, private service: UserServiceClient, private userService: UserServiceClient,
              private bookmarkService: BookmarkServiceClient, private registerService: LikeServiceClient) { }

  // ngOnInit() {
  //   this.service.profile()
  //     .then(user => {
  //         this.service.findUserByUsername(user.username)
  //           .then(u => {
  //             this.user = Object.assign({}, u);
  //             if (user.role === 'user') {
  //               this.admin = true;
  //             } else {
  //               this.admin = false;
  //             }
  //             this.findAllBookmarkedEvents();
  //             this.findAllRegisteredEvents();
  //           });
  //     })
  // }
  ngOnInit() {
    this.dtags = ["Food", "Academia / Education", "Sports", "Social", "Job / Career", "Spiritual / Ethics", "Outdoor", "Music", "Dance", "Art / Design", "Business", "Engineering", "Health / Wellness", "Law / Politics", "Undergraduate", "Graduate", "Culture", "Fundraiser", "Concert / Show", "Games / Entertainment", "Journalism", "Theatre", "Networking", "Cinematography", "Tech / Innovations", "Charity", "Lecture / Talk", "Competition / Contest", "Environment / Sustainability", "Motivation / Inspiration", "Workshop"];
    this.stags = [];
    this.alltags = this.dtags.slice();
    this.today = new Date("2019-04-01");
    this.service.profile()
      .then(user => {
              this.user = Object.assign({}, user);
              this.user.interests.forEach((tag) => {this.to_stags(tag)})
              if (user.role === 'user') {
                this.admin = true;
              } else {
                this.admin = false;
              }
              this.vpassword = "";
              this.findAllBookmarkedEvents();
              this.findAllRegisteredEvents();
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


  new_events() {
    this.events = this.registeredEvenets.filter(event => event.event.start_time !== undefined)
      .filter(e => new Date(e.event.start_time).getTime() > this.today.getTime())
  }

  old_events() {
    this.events = this.registeredEvenets.filter(event => event.event.start_time !== undefined)
      .filter(e => new Date(e.event.start_time).getTime() < this.today.getTime())
  }

  editp(){
    alert("The functionality is not implemented yet")
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
  }

  to_stags(t){
    if (this.stags.length >= 5) return;
    this.stags.push(t);
    this.dtags.splice(this.dtags.indexOf(t), 1);
  }

  to_dtags(t){
    this.dtags.push(t);
    this.stags.splice(this.stags.indexOf(t), 1);
  }

  update(){
    if (this.vpassword != this.password){
      this.error = true;
      return;
    }
    this.user.password = this.vpassword;
    this.user.interests = this.stags.slice();
    this.userService.updateUser(this.user);
    this.edit = !this.edit;

  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



}
