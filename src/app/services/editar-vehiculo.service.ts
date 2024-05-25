import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditarVehiculoService {
  private apiUrl = 'http://localhost:3000/actualizar';

  constructor(private http: HttpClient) {}

  editarVehiculo(vehiculoId: string, formData: any) {
    return this.http.put("http://localhost:3000/actualizar/" + vehiculoId, formData);
  }
}
