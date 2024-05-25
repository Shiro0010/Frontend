import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditarVehiculoService } from '../services/editar-vehiculo.service';
import { InfoServicesService } from '../services/info-services.service'; // Importa tu servicio InfoServicesService
import { PropietarioService } from '../services/propietarios.service'; // Importa tu servicio PropietarioService

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.scss']
})
export class EditarVehiculoComponent implements OnInit {
  formData: any = {
    "Vehiculo": "",
    "Color": "",
    "Modelo": 0,
    "referencia": "",
    "Descripcion": "",
    "Estado": "",
    "observacion": "",
    "imagen": "",
    "propietario": ""
  };
  estados = [
    { id: 'Ingresado', nombre: 'Ingresado' },
    { id: 'En reparación', nombre: 'En Reparación' },
    { id: 'Reparado', nombre: 'Reparado' }
  ];
  propietarios: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editarVehiculoService: EditarVehiculoService,
    private infoService: InfoServicesService, // Corrige la importación del servicio InfoServicesService
    private propietarioService: PropietarioService // Corrige la importación del servicio PropietarioService
  ) {}

  ngOnInit() {
    this.obtenerDatosVehiculo();
    this.obtenerPropietarios();
  }

  obtenerDatosVehiculo() {
    const vehiculoId = this.route.snapshot.params['id'];
    this.infoService.obtenerVehiculosIngresados().subscribe(
      (vehiculos) => {
        const vehiculo = vehiculos.find(v => v._id === vehiculoId);
        if (vehiculo) {
          this.formData = vehiculo;
        } else {
          console.error("Vehículo no encontrado");
        }
      },
      (error) => {
        console.error("Error al obtener los datos del vehículo:", error);
      }
    );
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

  actualizarVehiculo() {
    const vehiculoId = this.formData._id; // Obtener el _id del vehículo desde formData
    this.editarVehiculoService.editarVehiculo(vehiculoId, this.formData)
      .subscribe(
        () => {
          console.log("Vehículo actualizado exitosamente");
          alert("Vehículo actualizado con éxito");
        },
        (error) => {
          console.error("Error al actualizar el vehículo:", error);
          alert("Hubo un error al actualizar el vehículo");
        }
      );
  }

  finalizar() {
    this.router.navigate(['/vehiculos-ingresados']); // Redirige a donde desees sin realizar ninguna acción
  }
}
