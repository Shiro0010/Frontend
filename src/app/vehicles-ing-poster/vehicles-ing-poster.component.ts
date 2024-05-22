import { Component, OnInit } from '@angular/core';
import { PostServiceIngService } from '../services/post-service-ing.service';
import { PropietarioService } from '../services/propietarios.service';

@Component({
  selector: 'app-vehicles-ing-poster',
  templateUrl: './vehicles-ing-poster.component.html',
  styleUrls: ['./vehicles-ing-poster.component.scss']
})
export class VehiclesIngPosterComponent implements OnInit {
  formData: any = {
    "Vehiculo": "",
    "Color": "",
    "Modelo": 0,
    "referencia": "",
    "Descripcion": "",
    "EstadoId": "",
    "PropietarioId": ""
  };
  estados = [
    { id: 'ingresado', nombre: 'Ingresado' },
    { id: 'en-reparacion', nombre: 'En Reparación' },
    { id: 'reparado', nombre: 'Reparado' }
  ];
  propietarios: any[] = [];

  constructor(
    private poster: PostServiceIngService,
    private propietarioService: PropietarioService
  ) {}

  ngOnInit() {
    this.obtenerPropietarios();
  }

  obtenerPropietarios() {
    this.propietarioService.obtenerPropietarios()
      .subscribe(
        propietarios => {
          console.log('Propietarios recibidos:', propietarios); // Log para verificar los datos
          this.propietarios = propietarios;
        },
        error => {
          console.error("Error al obtener los propietarios:", error);
        }
      );
  }
  
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
