import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { PostServiceIngService } from "../services/post-service-ing.service"
@Component({
  selector: 'app-vehicles-ing-poster',
  templateUrl: './vehicles-ing-poster.component.html',
  styleUrls: ['./vehicles-ing-poster.component.scss']
})
export class VehiclesIngPosterComponent {
  formData: any = {
    "Vehiculo":"",
    "Color":"",
    "Modelo": 0,
    "referencia": "",
    "Descripcion":"",
    "imagen": ""
  }
  constructor(public poster:PostServiceIngService){}

  enviardatos(){
    this.poster.postearData(this.formData)
      .subscribe((responsexd) => {
        console.log("Datos Enviados exitosamente:" + responsexd);
      })
  }
}
