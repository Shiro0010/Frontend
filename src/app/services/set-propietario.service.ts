import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetPropietarioService {
  private apiUrl = 'http://localhost:3000/nuevoPropietario'; // Cambia la URL según sea necesario

  constructor(private http: HttpClient) { }

  guardarPropietario(propietario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, propietario);
  }
}