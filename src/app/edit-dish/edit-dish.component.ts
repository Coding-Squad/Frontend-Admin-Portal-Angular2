import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from '../services/upload-image.service';
import { GetDishService } from '../services/get-dish.service';
import { EditDishService } from '../services/edit-dish.service';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {

  private dishId:Number;
  private dish:Dish = new Dish();
  private dishUpdated: boolean;

  constructor(
    private uploadImageService: UploadImageService,
    private getDishService: GetDishService,
    private editDishService: EditDishService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit(){
    this.editDishService.editDish(this.dish).subscribe(
      data => {
        this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
        this.dishUpdated=true;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) =>{
         this.dishId=Number.parseInt(params['id']);
    });
    this.getDishService.getDish(this.dishId).subscribe(
      res => {
        this.dish = res.json();
      },
      error => {
        console.log(error);
      }
    )
  }

}
