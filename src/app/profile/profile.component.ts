import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';


import { User } from '../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;
  
  constructor() { }

  ngOnInit() {
  }

}
