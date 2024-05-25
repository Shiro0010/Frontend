import { TestBed } from '@angular/core/testing';

import { EditarVehiculoService } from './editar-vehiculo.service';

describe('EditarVehiculoService', () => {
  let service: EditarVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
