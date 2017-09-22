import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetDishService } from '../services/get-dish.service';
import { Dish } from '../models/dish';
import { AppConst } from '../constants/app-const';

@Component({
  selector: 'app-view-dish',
  templateUrl: './view-dish.component.html',
  styleUrls: ['./view-dish.component.css']
})
export class ViewDishComponent implements OnInit {

private serverPath = AppConst.serverPath;  

  private dish:Dish = new Dish();
  private dishId: Number;

  constructor(private getDishService:GetDishService, private route:ActivatedRoute, private router:Router) { }

  onSelect(dish:Dish){
    this.router.navigate(['/editDish', this.dish.id]);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
    this.dishId = Number.parseInt(params['id']);
  });
  
  this.getDishService.getDish(this.dishId).subscribe(
    res => {
       this.dish = res.json();
    },
    error => {
      console.log(error);
    }
  );
  }

}
