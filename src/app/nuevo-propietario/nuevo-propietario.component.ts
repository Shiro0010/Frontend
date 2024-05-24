import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetPropietarioService } from '../services/set-propietario.service';

@Component({
  selector: 'app-nuevo-propietario',
  templateUrl: './nuevo-propietario.component.html',
  styleUrls: ['./nuevo-propietario.component.scss']
})
export class NuevoPropietarioComponent {
  propietario: any = {
    Nombre: '',
    Direccion: '',
    Telefono: '',
    Email:''
  };

  constructor(private propietariosService: SetPropietarioService, private router: Router) {}

  onSubmit() {
    this.propietariosService.guardarPropietario(this.propietario).subscribe(response => {
      console.log("Propietario guardado:", response);
      alert("Propietario guardado exitosamente");
      this.router.navigate(['/ingresar-vehiculo']);
    }, error => {
      console.error("Error al guardar el propietario:", error);
      alert("Error al guardar el propietario")
    });
  }
}
