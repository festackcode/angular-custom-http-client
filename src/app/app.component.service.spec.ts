import { TestBed } from '@angular/core/testing';

import { App.ComponentService } from './app.component.service';

describe('App.ComponentService', () => {
  let service: App.ComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.ComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
