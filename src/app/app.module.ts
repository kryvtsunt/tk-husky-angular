import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserServiceClient} from "./services/user.service.client";
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { OrganizationComponent } from './organization/organization.component';
import { EventServiceClient } from './services/event.service.client';
import { ActivityServiceClient } from './services/activity.service.client';
import { BookmarkServiceClient } from './services/bookmark.service.client';
import { CommentServiceClient } from './services/comment.service.client';
import { FollowServiceClient } from './services/follow.service.client';
import { LikeServiceClient } from './services/like.service.client';
import { OrgServiceClient } from './services/org.service.client';
import { EventEditComponent } from './event-edit/event-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EventComponent,
    OrganizationComponent,
    EventEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [UserServiceClient,
    EventServiceClient,
    ActivityServiceClient,
    BookmarkServiceClient,
    CommentServiceClient,
    FollowServiceClient,
    LikeServiceClient,
    OrgServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
