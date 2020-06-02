import { TestBed } from '@angular/core/testing';

import { NavbarVisibilityService } from './navbar-visibility.service';

describe('NavbarVisibilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarVisibilityService = TestBed.get(NavbarVisibilityService);
    expect(service).toBeTruthy();
  });
});
