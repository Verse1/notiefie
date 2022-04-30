# Stage 1: Build
FROM node:16-alpine

WORKDIR /usr/src/app

COPY  package*.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm run start

# Stage 2: Run
FROM nginx:1.17.0-alpine

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]