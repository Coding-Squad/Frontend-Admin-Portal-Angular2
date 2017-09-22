import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddNewDishComponent } from './add-new-dish/add-new-dish.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { ViewDishComponent } from './view-dish/view-dish.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';
import { PredictionComponent } from './components/prediction/prediction.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'addNewDish',
        component: AddNewDishComponent
    },
    {
        path: 'dishList',
        component: DishListComponent
    },
     {
        path: 'viewDish/:id',
        component: ViewDishComponent
    },
    {
        path: 'editDish/:id',
        component: EditDishComponent
    },
    {
        path: 'prediction',
        component: PredictionComponent
    },
    {
        path: 'userList',
        component: UserListComponent
    },
    {
        path: 'viewUser/:id',
        component: ViewUserComponent
    }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);