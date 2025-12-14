import { provideAppInitializer } from '@angular/core';
import Keycloak, { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';
import { environment } from '../../../environments/environment';

const config: KeycloakConfig = {
  url: environment.authUrl,
  realm: environment.keycloakRealm,
  clientId: environment.keycloakClientId,
};

export const keycloak = new Keycloak(config);

export function provideKeycloakInit() {
  return provideAppInitializer(() => {
    // ВАРИАНТ ДЛЯ DEV: не блокируем старт приложения
    const options: KeycloakInitOptions = {
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      checkLoginIframe: false,
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
    };

    keycloak.init(options)
      .then((authenticated) => console.info('[Keycloak] init OK, authenticated =', authenticated))
      .catch((err) => console.error('[Keycloak] init FAILED', err));
  });
}