import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  clickMessage = '';
  values = '';
  selectedHero: '';

  contactusdata = new FormGroup({
      name : new FormControl('',Validators.required),
      email :new FormControl(''),
      message : new FormControl(''),
      image: new FormControl('')
  });
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onClickme()
  {
    this.clickMessage = 'message from component';
  }

  onKey(event:any ){
      this.values =  (<HTMLInputElement>event.target).value + ' | ';
  } 
  contactus()
  {
     console.log(this.contactusdata.value);
     
     const req = this.http.post('http://localhost/angularcodeigniter/index.php/welcome/contactus', {
      "name": this.contactusdata.value.name,
      "email":  this.contactusdata.value.email,
      "message":  this.contactusdata.value.message,
    }).subscribe(
        res => {
        
          console.log(res);
       
        },
        err => {
          console.log("Error occured",err);
        }
      );
    
    this.contactusdata.reset();
  }
 

}
