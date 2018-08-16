import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-usersservicescom',
  templateUrl: './usersservicescom.component.html',
  styleUrls: ['./usersservicescom.component.css']
})
export class UsersservicescomComponent implements OnInit {

  allusers;
  constructor(private users : UsersService) {   }

  ngOnInit() {
    this.users.get_data().subscribe(res => {
         this.allusers = res;
    });
  }

  allUsers()
  {
   // this.allusers = this.users.all_users(); 
  }
 
}
 