import { Component } from '@angular/core';
import { DeleteSrvIngService } from "../services/delete-srv-ing.service";
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-vehiculos-ing-delete',
  templateUrl: './vehiculos-ing-delete.component.html',
  styleUrls: ['./vehiculos-ing-delete.component.scss']
})
export class VehiculosIngDeleteComponent {
  id:string = ""
  constructor(
    
    public router:Router,
    public borrarwe:DeleteSrvIngService,

  ) { }

  eliminarDatos() {
    this.borrarwe.eliminarVehiculo(this.id)
      .subscribe((respuesta) => {
        console.log('Datos eliminados con éxito:', respuesta);
      });
  }

  regresar(){
    this.router.navigate(['/vehiculos-ingresados'])
  }

}
