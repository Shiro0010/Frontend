import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfoServicesService {

  constructor(private httpMethod:HttpClient) { }

  obtenerVehiculosIngresados(): Observable<any>{
    return this.httpMethod.get("http://localhost:3000/vehiculosIngresados")
      .pipe(
        catchError((error) => {
          return throwError(error)
        })
      )
  }
}
