import { TestBed } from '@angular/core/testing';

import { GetImageUrlService } from './get-image-url.service';

describe('GetImageUrlService', () => {
  let service: GetImageUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetImageUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
