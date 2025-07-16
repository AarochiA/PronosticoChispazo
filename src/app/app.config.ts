import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { cardMorthyGateway } from './domain/models/gateway/card-morthy-gateway';
import { CardMorthyApiService } from './infrastructure/driven-adapter/cardMorthy.api.service';
import { forecastGateway } from './domain/models/gateway/forecast-gateway';
import { ForecastApiService } from './infrastructure/driven-adapter/forecast.api.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()),
  { provide: cardMorthyGateway, useClass: CardMorthyApiService },
  { provide: forecastGateway, useClass: ForecastApiService}]
};
