import { Component } from '@angular/core';
import { PostServiceIngService } from '../services/post-service-ing.service';

@Component({
  selector: 'app-vehicles-ing-poster',
  templateUrl: './vehicles-ing-poster.component.html',
  styleUrls: ['./vehicles-ing-poster.component.scss']
})
export class VehiclesIngPosterComponent {
  formData: any = {
    "Vehiculo": "",
    "Color": "",
    "Modelo": 0,
    "referencia": "",
    "Descripcion": "",
    "Estado": "",
    "Observacion": "",
    "imagen": "",
    "propietario": ""
  };

  constructor(private poster: PostServiceIngService) {}

  enviardatos() {
    this.poster.postearData(this.formData)
      .subscribe(
        (response) => {
          console.log("Datos Enviados exitosamente:", response);
          alert("Datos guardados con exito pa");
        },
        (error) => {
          console.error("Error al enviar los datos:", error);
          alert("Hubo un error al enviar los datos joven");
        }
      );
  }
}
