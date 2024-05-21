import { Component } from '@angular/core';
import { InfoServicesService } from "../services/info-services.service";

@Component({
  selector: 'app-vehiculos-ingresados',
  templateUrl: './vehiculos-ingresados.component.html',
  styleUrls: ['./vehiculos-ingresados.component.scss']
})
export class VehiculosIngresadosComponent {
  constructor (private getInfo:InfoServicesService) {}
  public registro: any[] = []

  ngOnInit(){
    this.ObtenerRegistro()
  }
  ObtenerRegistro(){
    this.getInfo.obtenerVehiculosIngresados().subscribe(kevin => {
      console.log(kevin);
      this.registro = kevin
    })
  }
}
