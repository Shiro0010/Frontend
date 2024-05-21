import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosIngDeleteComponent } from './vehiculos-ing-delete.component';

describe('VehiculosIngDeleteComponent', () => {
  let component: VehiculosIngDeleteComponent;
  let fixture: ComponentFixture<VehiculosIngDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculosIngDeleteComponent]
    });
    fixture = TestBed.createComponent(VehiculosIngDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
