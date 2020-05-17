import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {CreateCarComponent} from './create-car/create-car.component';
import {UpdateCarComponent} from './update-car/update-car.component';
import {ShowCarComponent} from './show-car/show-car.component';


const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'add', component: CreateCarComponent },
  { path: 'update/:id', component: UpdateCarComponent },
  { path: 'car/:id', component: ShowCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
