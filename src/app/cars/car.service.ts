import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'https://cars-app-ksb2.herokuapp.com/cars';

  constructor(private http: HttpClient) {
  }

  getCar(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createCar(car: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, car);
  }

  // tslint:disable-next-line:ban-types
  updateCar(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCarList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // tslint:disable-next-line:ban-types
  modifyCarColor(car: Object): Observable<Object>{
    return this.http.patch(`${this.baseUrl}`, car);
  }
}
