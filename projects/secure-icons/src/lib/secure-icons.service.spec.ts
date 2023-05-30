import { TestBed } from '@angular/core/testing';

import { SecureIconsService } from './secure-icons.service';

describe('SecureIconsService', () => {
  let service: SecureIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecureIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
