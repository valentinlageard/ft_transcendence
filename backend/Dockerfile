FROM node:latest AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:latest AS production

WORKDIR /usr/src/app

COPY --from=development /usr/src/app .

CMD ["node", "dist/main"]