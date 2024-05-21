import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { VehiculosIngresadosComponent } from './vehiculos-ingresados/vehiculos-ingresados.component';
import { VehiclesIngPosterComponent } from './vehicles-ing-poster/vehicles-ing-poster.component';
import { VehiculosIngDeleteComponent } from './vehiculos-ing-delete/vehiculos-ing-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiculosIngresadosComponent,
    VehiclesIngPosterComponent,
    VehiculosIngDeleteComponent
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
