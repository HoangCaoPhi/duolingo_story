import { TestBed } from '@angular/core/testing';

import { TranferdataService } from './tranferdata.service';

describe('TranferdataService', () => {
  let service: TranferdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranferdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
