import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesIngPosterComponent } from './vehicles-ing-poster/vehicles-ing-poster.component';
import { VehiculosIngresadosComponent } from './vehiculos-ingresados/vehiculos-ingresados.component';
import { VehiculosIngDeleteComponent } from './vehiculos-ing-delete/vehiculos-ing-delete.component';

const routes: Routes = [
  {path: 'PostIng', component: VehiclesIngPosterComponent},
  {path: 'GetIng', component: VehiculosIngresadosComponent},
  {path: 'DeleteIng', component: VehiculosIngDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
