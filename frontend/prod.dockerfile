# FROM node:22-bookworm AS builder
# # RUN userdel -r node
# # ARG USER_ID
# # ARG GROUP_ID
# # RUN addgroup --gid ${GROUP_ID} user
# # RUN useradd -u ${USER_ID} -g ${GROUP_ID} -m -s /bin/bash -p "" user
# # USER user
# WORKDIR /app
# COPY . .
# RUN npm install
# CMD [ "npm", "run", "build" ]

# frontend/prod.dockerfile
FROM node:22-bookworm AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine AS production
COPY --from=builder /app/nginx /etc/nginx
COPY --from=builder /app/dist /etc/nginx/html





# services:
#   nginx:
#     build:
#       context: ./frontend
#       dockerfile: prod.dockerfile
#       args:
#         - USER_ID=1000
#         - GROUP_ID=1000
#     environment:
#       - NODE_ENV=production
#     ports:
#       - 80:80
#       - 443:443
#     env_file:
#       - ./frontend/production.env
#     depends_on:
#       - back
#   back:
#     build:
#       context: ./backend
#       dockerfile: prod.dockerfile
#       args:
#         - USER_ID=1000
#         - GROUP_ID=1000
#     expose:
#       - 3000
#     environment:
#       - NODE_ENV=production
#     env_file:
#       - ./backend/production.env
# volumes:
#   es_app: