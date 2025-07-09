FROM node:22-bookworm

WORKDIR /app

COPY ./package.json /app/
COPY ./package-lock.json /app/

RUN npm install

COPY . /app/

ENTRYPOINT [ "npm" ]