DO $$
BEGIN
   IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'pmservices') THEN
      CREATE ROLE pmservices LOGIN PASSWORD 'pmservices';
   END IF;
END
$$;

-- 2) База, если её ещё нет (вне транзакции)
SELECT 'CREATE DATABASE pmservices OWNER pmservices'
WHERE NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'pmservices') \gexec