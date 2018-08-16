import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { slideInDownAnimation  } from '../animations';
@Component({
  selector: 'app-users',
  
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  httpdata;
  public editdata: any;
  public editResponse: boolean=  false;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.display();
  }

  displaydata(data){   
    this.httpdata = data;

  }
  display()
  {
    this.http.get('http://localhost/angularcodeigniter/index.php/welcome/get').subscribe(
       data =>{ this.displaydata(data); }
  
  );
  }
  public add(data){
    console.log(data,"<<<<<<<<<<<<<data")
    const req = this.http.post('http://localhost/angularcodeigniter/index.php', {
      "title": data.title,
      "body":  data.body,
    }).subscribe(
        res => {
          // close form 
          console.log(res);
          this.display();
        },
        err => {
          console.log("Error occured",err);
        }
      );
  }

  delete(id)
  {
     this.http.delete("http://localhost/angularcodeigniter/index.php/welcome/delete" + '/' + id).subscribe(
      res => {
        console.log(res);
        this.display();
      },
      x=>console.log(x));
  }
  edit(id)
  {
    this.http.get('http://localhost/angularcodeigniter/index.php/welcome/edit/'+id).subscribe(
      res => 
        {
          if(res){
            this.editResponse = true;
          this.editdata=res;
          console.log(this.editdata,"Data")
        } else {
          this.editResponse = false;
          this.editdata ='dzfg';
        }
    
    });
  }
  
}
