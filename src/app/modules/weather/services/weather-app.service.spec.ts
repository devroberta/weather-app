/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeatherAppService } from './weather-app.service';

describe('Service: WeatherApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherAppService]
    });
  });

  it('should ...', inject([WeatherAppService], (service: WeatherAppService) => {
    expect(service).toBeTruthy();
  }));
});
