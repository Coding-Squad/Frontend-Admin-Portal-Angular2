import { Component, OnInit } from '@angular/core';
import { PredictService } from '../../services/predict.service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  private datetime: string;
  private visit: number[];


   

   constructor(private predictService: PredictService, private userService: UserService){}

  public barChartLabels:string[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 10
                }
            }]
        }
  };
 
  public barChartData:any[] = [
    {data: [5, 1, 2, 3, 4, 5, 6, 7, 2, 3, 10, 4, 2, 2, 6, 7, 8, 7, 3, 0, 1, 4, 6, 3 ], label: 'Series A'}
   
  ];

   // Doughnut
  public doughnutChartLabels:string[] = ['A','B','C','D'];
  public doughnutChartData:number[] = [5,7,2,10];
  public doughnutChartType:string = 'doughnut';

  private statData: number[];
  private statLabel: string[];
  private s0: number = 1;
  private s1: number = 2;
  private s2: number = 3;
  private s3: number = 4;

  private t0: number = 2;
  private t1: number = 7;
  private t2: number = 20
  private t3: number = 30;
  private t4: number = 40;
  private t5: number = 5;
  private t6: number = 6;
  private t7: number = 7;
  private t8: number = 8;
  private t9: number = 9;
  private t10: number = 10;
  private t11: number = 11;
  private t12: number = 12;
  private t13: number = 13;
  private t14: number = 14;
  private t15: number = 15;
  private t16: number = 16;
  private t17: number = 17;
  private t18: number = 18;
  private t19: number = 19;
  private t20: number = 20;
  private t21: number = 21;
  private t22: number = 22;
  private t23: number = 23;
  
  public randomiz():void {

this.predictService.getVisit(this.datetime).subscribe(
           res => {
               console.log(res.json());              
               this.visit=res.json();
               this.t0 = this.visit[0];
               this.t1 = this.visit[1];
               this.t2 = this.visit[2];
               this.t3 = this.visit[3];
               this.t4 = this.visit[4];
               this.t5 = this.visit[5];
               this.t6 = this.visit[6];
               this.t7 = this.visit[7];
               this.t8 = this.visit[8];
               this.t9 = this.visit[9];
               this.t10 = this.visit[10];
               this.t11 = this.visit[11];
               this.t12 = this.visit[12];
               this.t13 = this.visit[13];
               this.t14 = this.visit[14];
               this.t15 = this.visit[15];
               this.t16 = this.visit[16];
               this.t17 = this.visit[17];
               this.t18 = this.visit[18];
               this.t19 = this.visit[19];
               this.t20 = this.visit[20];
               this.t21 = this.visit[21];
               this.t22 = this.visit[22];
               this.t23 = this.visit[23];
               
               
         let data = [this.t0, this.t1, this.t2, this.t3, this.t4, this.t5, this.t6, this.t7, this.t8, this.t9, this.t10, this.t11, this.t12, this.t13, this.t14, this.t15, this.t16, this.t17, this.t18, this.t19, this.t20, this.t21, this.t22, this.t23];
         let clone = JSON.parse(JSON.stringify(this.barChartData));
         clone[0].data = data;
         this.barChartData = clone;           
           },
           error => {
               console.log(error);
           }
       );
  }

   onDate(){
       this.predictService.getVisit(this.datetime).subscribe(
           res => {
               console.log(res.json());              
               this.visit=res.json();
               this.randomiz();
           },
           error => {
               console.log(error);
           }
       );   
   }
      
    ngOnInit() { 
       
        this.predictService.getStatData().subscribe(
            res => {
                this.statData = res.json();
                console.log(res.json());
                this.doughnutChartData = this.statData;
                
            },
            error => {
                console.log(error);
            }
        );

        this.predictService.getStatLabel().subscribe(
            res => {
                this.statLabel = res.json();
                console.log(res.json());
                this.doughnutChartLabels = this.statLabel;
                
            },
            error => {
                console.log(error);
            }
        );
    }

}


