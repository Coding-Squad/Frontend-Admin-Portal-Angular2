import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';
import { AddDishService } from '../services/add-dish.service';
import { UploadImageService } from '../services/upload-image.service';


@Component({
  selector: 'app-add-new-dish',
  templateUrl: './add-new-dish.component.html',
  styleUrls: ['./add-new-dish.component.css']
})
export class AddNewDishComponent implements OnInit {

  private newDish: Dish = new Dish();
  private dishAdded: boolean;

  constructor(private addDishService:AddDishService, private uploadImageService:UploadImageService) {}

  onSubmit(){
    this.addDishService.sendDish(this.newDish).subscribe(
      res => {
        this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
         this.dishAdded=true;
         this.newDish = new Dish();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
