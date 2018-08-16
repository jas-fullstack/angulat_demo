import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  httpdata;
  selectedHero;
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
  displayhero(hero)
  {
    //this.selectedHero = hero;
    console.log(hero);
  }

}
