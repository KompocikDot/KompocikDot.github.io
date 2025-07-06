FROM node:24

WORKDIR /app

COPY . /app

RUN npm ci

ENTRYPOINT [ "npm", "run", "dev" ]

