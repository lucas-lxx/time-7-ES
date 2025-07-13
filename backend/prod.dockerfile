# FROM node:22-bookworm

# WORKDIR /app

# COPY ./package.json /app/
# COPY ./package-lock.json /app/

# RUN npm install

# COPY . /app/

# ENTRYPOINT [ "npm" ]

FROM node:22-bookworm AS builder

USER node
WORKDIR /app

COPY package*.json ./
# Install all dependencies (dev + prod) to build the app
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# --- Production Image ---
FROM node:22-bookworm AS production

USER node
WORKDIR /app
# Only copy built app and prod dependencies
COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY prisma ./prisma

CMD ["npx", "prisma", "migrate", "deploy", "&&", "node", "dist/main"]
