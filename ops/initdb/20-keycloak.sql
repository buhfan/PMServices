-- Роль для Keycloak
DO $$
BEGIN
   IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'keycloak') THEN
      CREATE ROLE keycloak LOGIN PASSWORD 'keycloak';
   END IF;
END
$$;

-- База для Keycloak
SELECT 'CREATE DATABASE keycloak OWNER keycloak'
WHERE NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'keycloak') \gexec