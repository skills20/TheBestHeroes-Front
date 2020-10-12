import { TestBed } from '@angular/core/testing';

import { WebHeroesService } from './web-heroes.service';

describe('WebHeroesService', () => {
  let service: WebHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
