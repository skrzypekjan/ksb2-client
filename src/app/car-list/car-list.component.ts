import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CarService} from '../cars/car.service';
import {Observable} from 'rxjs';
import {Car} from '../car';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Observable<Car[]>;
  car: Car;

  constructor(private carService: CarService,
              private router: Router,
              private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.detectChanges();
    }, 1000);
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.cars = this.carService.getCarList();
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateCar(id: number){
    this.router.navigate(['update', id]);
  }

  selectCar(id: number){
    this.router.navigate(['car', id]);
  }

}
