import { TestBed, async, inject } from '@angular/core/testing';

import { ActivGuard } from './activ.guard';

describe('ActivGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivGuard]
    });
  });

  it('should ...', inject([ActivGuard], (guard: ActivGuard) => {
    expect(guard).toBeTruthy();
  }));
});
