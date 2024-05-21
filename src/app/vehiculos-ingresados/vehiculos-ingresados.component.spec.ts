import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosIngresadosComponent } from './vehiculos-ingresados.component';

describe('VehiculosIngresadosComponent', () => {
  let component: VehiculosIngresadosComponent;
  let fixture: ComponentFixture<VehiculosIngresadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculosIngresadosComponent]
    });
    fixture = TestBed.createComponent(VehiculosIngresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
