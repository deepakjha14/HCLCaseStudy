import { TestBed } from '@angular/core/testing';

import { Mainpanel.FacadeService } from './mainpanel.facade.service';

describe('Mainpanel.FacadeService', () => {
  let service: Mainpanel.FacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mainpanel.FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
