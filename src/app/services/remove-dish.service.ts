import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Dish } from '../models/dish';
import { AppConst } from '../constants/app-const';

@Injectable()
export class RemoveDishService {

  private serverPath = AppConst.serverPath;

  constructor(private http:Http) { }

  removeDish(dishId: number){
    let url = this.serverPath+"/dish/remove";

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.post(url, dishId, {headers: headers});

  }

}
