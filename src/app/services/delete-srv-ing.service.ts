import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteSrvIngService {

  constructor(public httpdl:HttpClient) {
  }
  eliminarVehiculo(id:string): Observable<any>{
    return this.httpdl.delete("http://localhost:3000/borrar/" + id)

  }
}
