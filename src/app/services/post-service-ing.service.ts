import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServiceIngService {

  constructor(private http: HttpClient) { }

  postearData(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("http://localhost:3000/ingresarVehiculo", formData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Ocurrió un error del lado del cliente
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      // El backend devolvió un código de error
      console.error(
        `Código de error del backend ${error.status}, ` +
        `mensaje: ${JSON.stringify(error.error)}`); // Aquí se imprime el objeto completo como una cadena JSON
    }
    // Devolver un observable con un mensaje de error
    return throwError('Ocurrió un error al enviar los datos. Por favor, inténtelo de nuevo más tarde.');
  }
}
