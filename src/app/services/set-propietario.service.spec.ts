import { TestBed } from '@angular/core/testing';

import { SetPropietarioService } from './set-propietario.service';

describe('SetPropietarioService', () => {
  let service: SetPropietarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetPropietarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
