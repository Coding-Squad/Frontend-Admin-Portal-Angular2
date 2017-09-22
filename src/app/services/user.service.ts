import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user';
import { Rating } from '../models/rating';
import { AppConst } from '../constants/app-const';

@Injectable()
export class UserService {

  private serverPath = AppConst.serverPath;

  constructor(private http:Http) { }

  getUserList(){
    let url = this.serverPath+"/user/listUser";
    let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers}); 
  }

  getUser(id:number){
    let url = this.serverPath+"/user/"+id;
    let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers});

  }

  getUserRate(id:number){
    let url = this.serverPath+"/user/userRating/"+id;
    let headers = new Headers ({
       'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});
  }


}
