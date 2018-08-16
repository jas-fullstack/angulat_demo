import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register : FormGroup;
  constructor(private userservice : UsersService) { }

  ngOnInit() {
    this.register = new FormGroup({
      username : new FormControl("",Validators.required),
      password :  new FormControl("",Validators.required),
      email :  new FormControl("",[Validators.email,Validators.required]),
      
    });
  }
  get username(){ return this.register.get('username'); }
  get password(){ return this.register.get('password'); }
  get email(){ return this.register.get('email'); }

  register_user()
  {
    console.log(this.userservice.get_data());
  }
}
