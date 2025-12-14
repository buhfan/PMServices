export interface Environment {
  production: boolean;

  apiBaseUrl: string;

  authUrl: string;
  keycloakRealm: string;
  keycloakClientId: string;
}