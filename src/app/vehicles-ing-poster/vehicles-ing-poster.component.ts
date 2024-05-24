import { Component, OnInit } from '@angular/core';
import { PostServiceIngService } from '../services/post-service-ing.service';
import { PropietarioService } from '../services/propietarios.service';
import { Router } from '@angular/router';

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
    "Estado": "",
    "observacion":"",
    "imagen":"",
    "propietario": ""
  };
  estados = [
    { id: 'Ingresado', nombre: 'Ingresado' },
    { id: 'En reparación', nombre: 'En Reparación' },
    { id: 'Reparado', nombre: 'Reparado' }
  ];
  propietarios: any[] = [];

  constructor(
    private poster: PostServiceIngService,
    private propietarioService: PropietarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerPropietarios();
  }

  obtenerPropietarios() {
    this.propietarioService.obtenerPropietarios()
      .subscribe(
        propietarios => {
          console.log('Propietarios recibidos:', propietarios);
          this.propietarios = propietarios;
        },
        error => {
          console.error("Error al obtener los propietarios:", error);
        }
      );
  }
  
  enviardatos() {
    console.log('Datos a enviar:', this.formData);
    this.poster.postearData(this.formData)
      .subscribe(
        (response) => {
          console.log("Datos Enviados exitosamente:", response);
          alert("Datos guardados con éxito");
        },
        (error) => {
          console.error("Error al enviar los datos:", error);
          alert("Hubo un error al enviar los datos");
        }
      );
  }
  finalizar() {
    this.router.navigate(['/vehiculos-ingresados']);
  }
}

