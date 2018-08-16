import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : FormGroup;
  constructor(private usersservice :  UsersService) { }

  ngOnInit() {
    this.login = new FormGroup({
      username : new FormControl("",Validators.required),
      password :  new FormControl("",Validators.required)
    });
  }

  get username(){ return this.login.get('username'); }
  get password(){ return this.login.get('password'); }

  login_form(){
    //this.submitted = true;
    if(this.login.valid){
      console.log("submitted form");
      console.log(this.usersservice.get_data());
    }else{
     console.log('not submitted'); 
    }
    
  }

}
