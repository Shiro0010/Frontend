import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { VehiculosIngresadosComponent } from './vehiculos-ingresados/vehiculos-ingresados.component';
import { VehiclesIngPosterComponent } from './vehicles-ing-poster/vehicles-ing-poster.component';
import { VehiculosIngDeleteComponent } from './vehiculos-ing-delete/vehiculos-ing-delete.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { NuevoPropietarioComponent } from './nuevo-propietario/nuevo-propietario.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiculosIngresadosComponent,
    VehiclesIngPosterComponent,
    VehiculosIngDeleteComponent,
    LandingPageComponent,
    MenuPageComponent,
    NuevoPropietarioComponent,
    EditarVehiculoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
