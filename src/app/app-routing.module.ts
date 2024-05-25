import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesIngPosterComponent } from './vehicles-ing-poster/vehicles-ing-poster.component';
import { VehiculosIngresadosComponent } from './vehiculos-ingresados/vehiculos-ingresados.component';
import { VehiculosIngDeleteComponent } from './vehiculos-ing-delete/vehiculos-ing-delete.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { NuevoPropietarioComponent } from './nuevo-propietario/nuevo-propietario.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Página de inicio
  { path: 'menu', component: MenuPageComponent }, // Página con los botones
  { path: 'nuevo-propietario', component: NuevoPropietarioComponent }, // Formulario para nuevos propietarios
  { path: 'ingresar-vehiculo', component: VehiclesIngPosterComponent }, // Componente para ingresar vehículos
  { path: 'vehiculos-ingresados', component: VehiculosIngresadosComponent },
  {path: 'DeleteIng', component: VehiculosIngDeleteComponent}, //Borrar Vainas
  { path: 'editar-vehiculo/:id', component: EditarVehiculoComponent }, //Editar vainas
  { path: '', component: LandingPageComponent }, // Página de inicio
  { path: 'menu', component: MenuPageComponent }, // Página con los botones
  { path: 'nuevo-propietario', component: NuevoPropietarioComponent }, // Formulario para nuevos propietarios

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
