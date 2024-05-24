// propietario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private apiUrl = 'http://localhost:3000/propietariosIngresados'; // Reemplaza con la URL correcta

  constructor(private http: HttpClient) {}

  obtenerPropietarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los propietarios:', error);
          throw error;
        })
      );
  }
}
