import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent {
  constructor(private router: Router) {}

  navigateToNuevoPropietario() {
    this.router.navigate(['/nuevo-propietario']);
  }
  
  navigateToVehiculosIngresados() {
    this.router.navigate(['/vehiculos-ingresados']);
  }
}