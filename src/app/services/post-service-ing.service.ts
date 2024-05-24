import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostServiceIngService {

  constructor(public poster:HttpClient) { }

  postearData(formData: any): Observable<any> {
      return this.poster.post("http://localhost:3000/ingresarVehiculo", formData)
  }
}
