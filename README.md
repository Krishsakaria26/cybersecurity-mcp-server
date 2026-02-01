![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Express](https://img.shields.io/badge/Express-5.x-black)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Security](https://img.shields.io/badge/Security-Defense--in--Depth-red)
![Logging](https://img.shields.io/badge/Audit%20Logging-Enabled-yellow)
![License](https://img.shields.io/badge/License-MIT-purple)
![Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen)
![API](https://img.shields.io/badge/API-MCP%20Spec%201.0-orange)

# cybersecurity-mcp-server 🔐

**Security-first MCP (Model Context Protocol) backend** built with Node.js and Express.

---

## 🚀 Overview

This repository contains a secure, production-oriented MCP backend focusing on best practices for hardening, monitoring and safe defaults. It uses Express 5, Helmet for headers, rate limiting middleware, and structured logging (`winston` + `winston-daily-rotate-file`).

## ⚙️ Features

- Express 5 backend
- Security middleware (Helmet, rate limiting)
- Structured logging with `winston` and `winston-daily-rotate-file`
- Docker-friendly with a `Dockerfile`
- Simple, modular architecture (controllers, services, middleware)

## 📁 Project Structure

A short map of core folders and important files so contributors know where to look.

```
src/
  ├─ server.js         # App entrypoint (starts HTTP server)
  ├─ app.js            # Express app, middleware, routes registration
  ├─ routes/           # API route definitions (e.g., mcp.routes.js)
  ├─ controllers/      # Request handlers (mcp.controller.js)
  ├─ services/         # Business logic & integrations (mcp.service.js)
  ├─ middleware/       # auth, rateLimit, and other cross-cutting concerns
  ├─ config/           # env.js, security.js and config helpers
  └─ utils/            # logger.js and helper utilities

logs/                  # Rotated log files written by winston
Dockerfile             # Container image build instructions
package.json           # Scripts & dependencies
README.md              # This document
```

Notes:
- `src/config/env.js` centralizes environment variable loading and defaults.
- `utils/logger.js` uses `winston` + `winston-daily-rotate-file` for structured, rotated logs.
- Keep business logic in `services/` and handlers in `controllers/` to keep tests and mocking straightforward.

---

## 🧑‍💻 Local Development

Get started quickly for development and debugging:

1. Clone and install dependencies

```bash
git clone https://github.com/Krishsakaria26/cybersecurity-mcp-server.git
cd cybersecurity-mcp-server
npm install
```

2. Create a `.env` file (optional but recommended)

Create `.env` in project root or use `.env.example` (if present). Typical variables:

```
PORT=3000
NODE_ENV=development
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=100
LOG_LEVEL=debug
```

3. Start in development mode (auto-reloads on change)

```bash
npm run dev
```

4. Production run

```bash
npm start
```

Tips:
- Use your IDE debugger attached to `src/server.js` for breakpoints.
- Add tests (Jest/Mocha) and a `test` npm script before merging features.
- Run linters and formatters as a pre-commit hook for consistency.

---

## 🐳 Docker Deployment

This repo includes a `Dockerfile` so you can run the app in a container. Example commands below show building, running, and running with an env-file and persistent logs.

Build the image:

```bash
docker build -t mcp-server:latest .
```

Run the container (basic):

```bash
docker run -p 3000:3000 --rm --name mcp-server mcp-server:latest
```

Run the container with an env file and persistent logs:

```bash
docker run -p 3000:3000 --env-file .env -v "$(pwd)/logs:/app/logs" --restart unless-stopped --name mcp-server mcp-server:latest
```

Optional: Docker Compose (example `docker-compose.yml`):

```yaml
version: '3.8'
services:
  mcp-server:
    build: .
    image: mcp-server:latest
    ports:
      - "3000:3000"
    env_file: .env
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped
```

Health & deployment notes:
- Provide sensible resource limits and environment secrets via your orchestrator (Kubernetes/Swarm).
- Mount `logs/` for host access or forward logs to a log aggregator for production.
- Add a container healthcheck if your orchestration platform requires it.

---

## 🧩 Configuration

Environment settings are loaded from `src/config/env.js`. Common variables:

- `PORT` - server port (default: 3000)
- `NODE_ENV` - environment (`development`/`production`)
- Rate limit options in `src/config/security.js` (window, max requests)

> Tip: Create a `.env` file in the project root for local development.

## 🧩 Configuration

Environment settings are loaded from `src/config/env.js`. Common variables:

- `PORT` - server port (default: 3000)
- `NODE_ENV` - environment (`development`/`production`)
- Rate limit options in `src/config/security.js` (window, max requests)

> Tip: Create a `.env` file in the project root for local development.

## 🧭 Logging

The app uses `winston` with `winston-daily-rotate-file` for rotated logs stored in the `logs/` folder. Logs include structured timestamps and levels for easier parsing and aggregation.

## 🧪 Tests

There are no automated tests included yet. Contributions adding tests (Jest/Mocha) are welcomed.

## 🤝 Contributing

Contributions are welcome — please open issues or pull requests on the GitHub repository. Follow existing code patterns and keep security considerations in mind.

## 📄 License

MIT — see the `LICENSE` file.

---

## 👤 Author

Krish Sakaria :
Cybersecurity & Backend Engineering

Manish Shah :
Backend Engineering

Madhusmita Choudhary :
Fullstack Engineering
