import { TestBed } from '@angular/core/testing';

import { DeleteSrvIngService } from './delete-srv-ing.service';

describe('DeleteSrvIngService', () => {
  let service: DeleteSrvIngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSrvIngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
