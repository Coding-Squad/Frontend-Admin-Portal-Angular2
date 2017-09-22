import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Dish } from '../models/dish';
import { AppConst } from '../constants/app-const';

@Injectable()
export class GetDishListService {

  private serverPath = AppConst.serverPath;

  constructor(private http:Http) { }

  getDishList(){
    let url = this.serverPath+"/dish/dishList";

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers});

  }

}
