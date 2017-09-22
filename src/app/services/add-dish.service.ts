import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Dish } from '../models/dish';
import { AppConst } from '../constants/app-const';

@Injectable()
export class AddDishService {

  private serverPath = AppConst.serverPath;

  constructor(private http:Http) { }

  sendDish(dish:Dish){
    let url = this.serverPath+"/dish/add";

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.post(url, JSON.stringify(dish), {headers: headers});

  }

}
