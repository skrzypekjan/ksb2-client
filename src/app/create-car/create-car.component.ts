import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CarService} from '../cars/car.service';
import {Router} from '@angular/router';
import {Car} from '../car';
import {CarListComponent} from '../car-list/car-list.component';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  car: Car = new Car();
  submitted = false;
  reload: CarListComponent;

  constructor(private carService: CarService,
              private router: Router,
              private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.detectChanges();
    }, 1000);
  }

  ngOnInit(){
  }

  save() {
    this.carService.createCar(this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.reload.reloadData();
  }

  gotoList() {
    this.router.navigate(['/cars']);
  }

}
