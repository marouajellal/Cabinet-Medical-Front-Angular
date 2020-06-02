import { TestBed } from '@angular/core/testing';

import { ProfileLinksVisibilityService } from './profile-links-visibility.service';

describe('ProfileLinksVisibilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileLinksVisibilityService = TestBed.get(ProfileLinksVisibilityService);
    expect(service).toBeTruthy();
  });
});
