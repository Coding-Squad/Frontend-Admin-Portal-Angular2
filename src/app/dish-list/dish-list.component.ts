import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from '../models/dish';
import { GetDishListService } from '../services/get-dish-list.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { RemoveDishService } from '../services/remove-dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  private selectedDish: Dish;
  private checked: boolean;
  private allchecked: boolean;
  private dishList: Dish[];
  private removeDishList: Dish[] = new Array();

  constructor(private getDishListService:GetDishListService, 
              private removeDishService: RemoveDishService,
              private router:Router,
               public dialog:MdDialog) { }

  onSelect(dish:Dish){
    this.selectedDish=dish;
    this.router.navigate(['/viewDish', this.selectedDish.id]);
  }

   openDialog(dish:Dish) {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result=="yes") {
          this.removeDishService.removeDish(dish.id).subscribe(
            res => {
              console.log(res);
              this.getDishList();
            }, 
            err => {
              console.log(err);
            }
          );
        }
      }
    );
  }

  getDishList() {
    this.getDishListService.getDishList().subscribe(
      res => {
        console.log(res.json());
        this.dishList=res.json();
      }, 
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  this.getDishList();
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
