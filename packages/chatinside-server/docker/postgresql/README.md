## 1. Run PostgreSQL Server with docker compose

```bash
docker-compose up -d
```

## 2. Run Bash

```bash
docker exec -it postgres bash
```

## 3. login as postgres

```bash
psql --u prisma
```

## 4. Run following statements

```sql
CREATE DATABASE chatinsides ENCODING 'UTF8';
CREATE USER chatinside WITH ENCRYPTED PASSWORD 'chatinside';
GRANT ALL PRIVILEGES ON DATABASE chatinside to chatinside;
ALTER USER chatinside CREATEDB;
```

## etc. User LOGIN

```bash
psql -U username -d database
```
