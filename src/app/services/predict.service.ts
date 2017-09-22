import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';

@Injectable()
export class PredictService {

  private serverPath = AppConst.serverPath;

  constructor(private http:Http) { }

  getComeBack(id:number){
    let url = this.serverPath+"/prediction/"+id;

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers});

  }

  getVisit(datetime:string){

    let url = this.serverPath+"/order/visite";
    let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.post(url, datetime, {headers: headers});
  }

 getStatData(){
    let url = this.serverPath+"/dish/statData";

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers});

  }

  getStatLabel(){
    let url = this.serverPath+"/dish/statLabel";

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers});

  }

}
