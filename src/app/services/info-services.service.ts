import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoServicesService {

  private apiUrlPropietarios = 'http://localhost:3000/propietariosIngresados'; // Reemplaza con la URL correcta
  private apiUrlVehiculos = 'http://localhost:3000/vehiculosIngresados'; // Reemplaza con la URL correcta

  constructor(private httpMethod: HttpClient) { }

  obtenerVehiculosIngresados(): Observable<any[]> {
    return this.httpMethod.get<any[]>(this.apiUrlVehiculos)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  obtenerPropietarios(): Observable<any[]> {
    return this.httpMethod.get<any[]>(this.apiUrlPropietarios)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los propietarios:', error);
          throw error;
        })
      );
  }
}
