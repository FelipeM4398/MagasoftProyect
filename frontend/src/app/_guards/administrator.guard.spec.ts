import { TestBed, async, inject } from '@angular/core/testing';

import { AdministratorGuard } from './administrator.guard';

describe('AdministratorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministratorGuard]
    });
  });
});
