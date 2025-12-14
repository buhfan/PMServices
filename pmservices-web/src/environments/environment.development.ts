export const environment: {
  production: boolean;
  apiBaseUrl: string;
  authUrl: string;
  keycloakRealm: string;
  keycloakClientId: string;
} = {
  production: false,
  apiBaseUrl: 'http://localhost:5000',
  authUrl: 'http://localhost:8085',
  keycloakRealm: 'pmservices',
  keycloakClientId: 'pmservices-spa',
};
