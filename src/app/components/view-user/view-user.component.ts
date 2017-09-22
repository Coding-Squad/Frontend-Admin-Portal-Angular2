import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PredictService } from '../../services/predict.service';
import { User } from '../../models/user';
import { Rating } from '../../models/rating';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  private user:User = new User();
  private rating:Rating = new Rating();
  private userId: number;
  private comeback: number;

  constructor(private userService:UserService, private predictService:PredictService, private route:ActivatedRoute) { }

 // PolarArea
  public polarAreaChartLabels:string[] = ['Food', 'Service', 'Price'];
  public polarAreaChartData:number[] = [5,1,3];
  public polarAreaLegend:boolean=true;
  public polarAreaChartType:string ='polarArea';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.userId = Number.parseInt(params['id']);
    });

    this.userService.getUser(this.userId).subscribe(
      res => {
        this.user = res.json();
      },
      error => {
        console.log(error);
      }
    );

    this.predictService.getComeBack(this.userId).subscribe(
      res => {
        console.log(res.json());
        this.comeback=res.json();
        console.log(this.comeback)

      },
      error => {
        console.log(error.text());
      }
    );

    this.userService.getUserRate(this.userId).subscribe(
      res => {
        this.rating= res.json();
        this.polarAreaChartData = [res.json().food,res.json().service,res.json().price];
      },
      error => {
        console.log(error);
      }
    ); 
  

  }

}
