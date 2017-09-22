import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Dish } from '../models/dish';
import { AppConst } from '../constants/app-const';

@Injectable()
export class GetDishService {

  private serverPath = AppConst.serverPath;

  constructor(private http:Http) { }

  getDish(id:Number){
    let url = this.serverPath+"/dish/"+id;

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers});

  }

}
