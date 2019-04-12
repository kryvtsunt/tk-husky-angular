import { Component, OnInit } from '@angular/core';
import { EventServiceClient } from '../services/event.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkServiceClient } from '../services/bookmark.service.client';
import { UserServiceClient } from '../services/user.service.client';
import { LikeServiceClient } from "../services/like.service.client";
import { CommentServiceClient } from '../services/comment.service.client';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventService: EventServiceClient,
    private bookmarkService: BookmarkServiceClient,
    private userService: UserServiceClient,
    private activatedRoute: ActivatedRoute,
    private registerService: LikeServiceClient,
    private commentService: CommentServiceClient,
    private router: Router) { }

  eventId: String;
  event: Event;
  registerBtnText = "Register";
  liked = false;
  bookmarked = false;
  comments = [];
  comment: String;
  user: { username: '', _id:'' };
  new: boolean;
  today: Date
  org: boolean;

  ngOnInit() {

    this.today = new Date("2019-04-01");

    this.activatedRoute.params.subscribe(params => {
      this.eventId = params['eventId'];
    });
    console.log(this.eventId);

    this.userService.profile().then((user) => {
        if (user.role == "org") this.org = true
        else this.org = false
      this.user = user;
    }
    )
    this.eventService.findEvent(this.eventId)
      .then(event => {

        this.event = event;
        console.log(this.event);
        this.checkLike();
        this.checkBookmark();
        this.new = new Date(this.event.start_time).getTime() > this.today.getTime();
      });

      this.commentService.findAllComments(this.eventId).then((response)=>{
        console.log("FETCHED COMMENTS");
        console.log(response);
        this.comments = response;
      })
  }


  addComment = () => {

    if (this.comment.trim() === '') {
      this.comment = '';
      return;
    }

    this.commentService.addComment(this.eventId, this.comment,this.event ).then(() => {
      this.commentService.findAllComments(this.eventId).then((response)=>{
        console.log("FETCHED COMMENTS");
        console.log(response);
        this.comments = response;
      })
    });

    this.comment = '';
  }

  deleteComment = (commentObj) => {


  console.log("in delete")
    this.commentService.deleteComment(this.eventId, this.user._id ,commentObj.comment)
    .then(() => {
      this.commentService.findAllComments(this.eventId).then((response)=>{
        console.log("FETCHED COMMENTS");
        console.log(response);
        this.comments = response;
      })
    });
  }

  registerForEvent() {
    if (this.liked) {
      this.unlike()
    } else {
      this.like()
    }

    //TODO: invoke DB
    // alert("Registration feature still under construction. Once registered your profile icon will appear in the list of icons below the 'Register' button");

  }

  bookmarkEvent() {
    //event.isBookmarked = !event.isBookmarked;

    if (this.bookmarked) {
      this.unbookmark()
    }
    else {
      this.bookmark()
    }
  }

  checkLike() {
    this.registerService.checkLike(this.eventId).then((response) => {
      this.liked = response;
      console.log(this.liked)
      this.registerBtnText = (this.liked) ? "Unregister" : "Register";
    })
  }

  like() {
    this.registerService.like(this.event)
      .then(() => {
        this.checkLike();

      });
  }

  unlike() {
    this.registerService.unlike(this.event)
      .then(() => {
        this.checkLike();

      });
  }

  checkBookmark() {
    this.bookmarkService.checkBookmark(this.eventId).then((response) => {
      this.bookmarked = response;
    })
  }

  bookmark() {
    this.bookmarkService.bookmark(this.event)
      .then(() => {
        this.checkBookmark();
      });
  }

  unbookmark() {
    this.bookmarkService.unbookmark(this.event)
      .then(() => {
        this.checkBookmark();

      });
  }

  logout = () => {
    var r = confirm("Are you sure you want to logout?");
    if (r == true) {
      this.userService.logout().then(() => {
        this.router.navigate(['login']);
      });
    } else {

    }
  }


  nallert() {
    alert("The functionality is not implemented yet")
  }

  confirmDelete = (event) => {
    var r = confirm("Are you sure you want to delete event?");
    if (r) {
      this.eventService.deleteEvent(event._id)
        .then(response => {
          this.router.navigate(['organization']);
        })
    }
  }
}
