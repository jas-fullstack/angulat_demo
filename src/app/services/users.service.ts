import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  all_users;
  constructor(private http: HttpClient) { }
  get_data()
  {
    return this.http.get('http://localhost/angularcodeigniter/index.php/welcome/get');
      
  }
}
