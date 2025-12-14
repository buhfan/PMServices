import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { provideKeycloakInit } from './core/auth/keycloak.config';
/*import { AUTH_SERVICE } from './core/auth/auth.types';
import { authServiceFactory } from './core/auth/auth.factory';
import { LoggerService } from './core/logger.service';*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // если уже есть — второй раз не добавляй
    provideKeycloakInit(),
    /*LoggerService,
    {
      provide: AUTH_SERVICE,
      useFactory: authServiceFactory,
      deps: [HttpClient, LoggerService],
    },*/
  ]
};
