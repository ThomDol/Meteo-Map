import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';


import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { ApiBanService } from './service/api-ban.service';
import { ApiWeatherService } from './service/api-weather.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(HttpClientModule),ApiBanService,ApiWeatherService]
};
