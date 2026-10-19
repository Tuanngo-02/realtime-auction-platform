# Realtime Auction Platform

Starter monorepo with the requested directory structure. Auction business logic, authentication, payments, WebSockets and AI models are not implemented yet.

## Services

- `frontend/`: JavaScript + Vite starter page.
- `backend/`: Java 21 + Spring Boot, with `/api/health` and `/actuator/health` endpoints.
- `ai-service/`: Python 3.12 + FastAPI, with `/health` and API documentation at `/docs`.
- `infrastructure/`: Docker Compose templates, optional Nginx gateway and development scripts.
- `tests/`: placeholders for Postman collections and k6 scripts.
- `docs/`: project documentation placeholder.

## Run with Docker

Install Docker with Compose v2. From the project root:

```powershell
Copy-Item .env.example .env
docker compose --env-file .env -f infrastructure/docker/compose.dev.yml up --build -d
```

Open frontend at http://localhost:3000, backend at http://localhost:8080/api/health, and AI docs at http://localhost:8000/docs.

```powershell
docker compose --env-file .env -f infrastructure/docker/compose.dev.yml down
```

## Local development

Frontend: in `frontend`, run `npm install` then `npm run dev` (port 5173).
Backend: in `backend`, run `mvn spring-boot:run`.
AI: in `ai-service`, create and activate a virtual environment, run `python -m pip install -r requirements.txt`, then `python -m uvicorn app.main:app --reload`.

## Checks

- Frontend: `npm install` then `npm run build`.
- Backend: `mvn -B verify` (no business tests yet).
- AI: install `requirements-dev.txt`, then run `python -m compileall app` (no model tests yet).

## CI and deployment

Service CI workflows validate frontend build, Maven build and AI compilation/import. The manual `deploy.yml` workflow validates Compose and builds images; it does not publish images or deploy to a server.

Staging and production Compose files are single-host templates. Configure secrets, HTTPS, database, storage, monitoring and deployment infrastructure before production use. Backend and AI host ports bind to localhost in staging and production. The optional Nginx configuration is not enabled by default.
