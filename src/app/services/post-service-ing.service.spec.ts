import { TestBed } from '@angular/core/testing';

import { PostServiceIngService } from './post-service-ing.service';

describe('PostServiceIngService', () => {
  let service: PostServiceIngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostServiceIngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
