FROM node:22-bookworm AS builder
USER node
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "run", "build" ]