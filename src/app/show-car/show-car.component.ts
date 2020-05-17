import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../cars/car.service';
import {Car} from '../car';
import {Observable} from 'rxjs';
import {CarListComponent} from '../car-list/car-list.component';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent implements OnInit {

  reload: CarListComponent;
  id: number;
  car: Car;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private carService: CarService,
              private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.detectChanges();
    }, 1000);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carService.getCar(this.id)
      .subscribe(data => {
        console.log(data)
        this.car = data;
      }, error => console.log(error));
  }

  updateColor() {
    this.carService.modifyCarColor(this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.gotoList();
  }

  onSubmit() {
    this.updateColor();
    this.reload.reloadData();
  }

  gotoList() {
    this.router.navigate(['/cars']);
  }

}
