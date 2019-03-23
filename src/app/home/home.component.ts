import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {} from '@types/googlemaps';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private userService: UserServiceClient, private router: Router) {
  }


}
