export const environment: {
  production: boolean;
  apiBaseUrl: string;
  authUrl: string;
  keycloakRealm: string;
  keycloakClientId: string;
} = {
  production: true,
  apiBaseUrl: 'https://api.pmservices.com',   // потом поправим под реальный домен
  authUrl: 'https://auth.pmservices.com',     // и тут
  keycloakRealm: 'pmservices',
  keycloakClientId: 'pmservices-spa',
};