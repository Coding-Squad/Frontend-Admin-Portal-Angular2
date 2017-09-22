import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MaterialModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerModule } from 'angular2-material-datepicker';
import 'hammerjs';

import { LoginService } from './services/login.service';
import { AddDishService } from './services/add-dish.service';
import { UploadImageService } from './services/upload-image.service';
import { GetDishListService } from './services/get-dish-list.service';
import { GetDishService } from './services/get-dish.service';
import { EditDishService } from './services/edit-dish.service';
import { RemoveDishService } from './services/remove-dish.service';
import { PredictService } from './services/predict.service';
import { UserService } from './services/user.service';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AddNewDishComponent } from './add-new-dish/add-new-dish.component';
import { DishListComponent, DialogResultExampleDialog  } from './dish-list/dish-list.component';
import { ViewDishComponent } from './view-dish/view-dish.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';
import { PredictionComponent } from './components/prediction/prediction.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ViewUserComponent } from './components/view-user/view-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewDishComponent,
    DishListComponent,
    ViewDishComponent,
    EditDishComponent,
    DialogResultExampleDialog,
    PredictionComponent,
    UserListComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    BrowserAnimationsModule,
    ChartsModule,
    DatepickerModule
  ],
  providers: [
    LoginService,
    AddDishService,
    UploadImageService,
    GetDishListService,
    GetDishService,
    EditDishService,
    RemoveDishService,
    PredictService,
    UserService
  ],
  bootstrap: [AppComponent,  DialogResultExampleDialog]
})
export class AppModule { }
