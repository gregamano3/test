FROM node:18-alpine

WORKDIR /app

# Install dependencies (including dev dependencies for build)
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Clean up dev dependencies to reduce image size
RUN npm prune --production

EXPOSE 9012

# Serve the static files from the out directory
CMD ["serve", "-s", "out", "-l", "9012"]