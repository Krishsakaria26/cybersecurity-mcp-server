# Use LTS Node.js
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY src ./src
COPY docs ./docs

# Expose MCP port
EXPOSE 3000

# Environment defaults
ENV NODE_ENV=production

# Start server
CMD ["node", "src/server.js"]
