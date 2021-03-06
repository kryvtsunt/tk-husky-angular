import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {EventComponent} from "./event/event.component";
import {EventEditComponent} from "./event-edit/event-edit.component";
import {OrganizationComponent} from "./organization/organization.component";


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'event', component: EventComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'organization', component: OrganizationComponent},
  { path: 'organization/:orgId', component: OrganizationComponent},
   { path: 'event/:eventId', component: EventComponent },
  { path: 'event-edit', component: EventEditComponent },
  { path: 'event-edit/:eventId', component: EventEditComponent },
  { path: '**', component: HomeComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
