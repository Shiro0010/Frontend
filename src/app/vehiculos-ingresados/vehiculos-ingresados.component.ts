import { Component, OnInit } from '@angular/core';
import { forkJoin, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InfoServicesService } from "../services/info-services.service";
import { Router } from '@angular/router';

interface Vehiculo {
  _id: string;
  Vehiculo: string;
  Color: string;
  Modelo: number;
  referencia: string;
  Descripcion: string;
  Estado: string;
  observacion: string;
  imagen: string;
  propietario: string; // Almacena el ID del propietario inicialmente
}

interface Propietario {
  _id: string;
  Nombre: string;
  Direccion: string;
  Telefono: string;
  Email: string;
}

@Component({
  selector: 'app-vehiculos-ingresados',
  templateUrl: './vehiculos-ingresados.component.html',
  styleUrls: ['./vehiculos-ingresados.component.scss']
})
export class VehiculosIngresadosComponent implements OnInit {
  public registro: Vehiculo[] = [];
  private propietariosMap: { [key: string]: Propietario } = {};

  constructor(
    
    private router: Router,
    private getInfo: InfoServicesService,

  ) {}

  ngOnInit() {
    this.ObtenerRegistro();
  }

  ObtenerRegistro() {
    forkJoin({
      vehiculos: this.getInfo.obtenerVehiculosIngresados(),
      propietarios: this.getInfo.obtenerPropietarios()
    }).subscribe(({ vehiculos, propietarios }) => {
      // Crear un mapa de propietarios por ID para un acceso rápido
      propietarios.forEach(propietario => {
        this.propietariosMap[propietario._id] = propietario;
      });

      // Mapear los IDs de propietarios a sus nombres en los vehículos
      this.registro = vehiculos.map(vehiculo => {
        const propietario = this.propietariosMap[vehiculo.propietario];
        if (propietario) {
          vehiculo.propietario = propietario.Nombre;
        } else {
          vehiculo.propietario = 'Propietario no encontrado';
        }
        return vehiculo;
      });
    }, error => {
      console.error('Error al obtener la información de los vehículos ingresados o propietarios:', error);
      throwError(error);
    });
  }

  irAEliminarVehiculo() {
    this.router.navigate(['/DeleteIng']);
  }


  editarVehiculo(id: string) {
    this.router.navigate(['/editar-vehiculo', id]);
  }

}
