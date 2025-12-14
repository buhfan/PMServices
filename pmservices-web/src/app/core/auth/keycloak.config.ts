import { APP_INITIALIZER, Provider } from '@angular/core';
import Keycloak, {
  KeycloakConfig,
  KeycloakInitOptions,
} from 'keycloak-js';
import { environment } from '../../../environments/environment';

// Явно типизируем конфиг
const keycloakConfig: KeycloakConfig = {
  url: environment.authUrl,
  realm: environment.keycloakRealm,
  clientId: environment.keycloakClientId,
};

// Тип Keycloak выводится автоматически, этого достаточно
export const keycloak = new Keycloak(keycloakConfig);

function initializeKeycloak() {
  return async () => {
    const initOptions: KeycloakInitOptions = {
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      checkLoginIframe: false,
      silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silent-check-sso.html',
    };

    try {
      const authenticated = await keycloak.init(initOptions);
      console.info('[Keycloak] init OK, authenticated =', authenticated);
    } catch (err) {
      console.error('[Keycloak] init FAILED', err);
      // не роняем приложение, даже если Keycloak упал
      return true;
    }

    return true;
  };
}

export const keycloakProviders: Provider[] = [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
  },
];