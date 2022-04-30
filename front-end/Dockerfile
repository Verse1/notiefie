# Stage 1: Build
FROM node:16-alpine

WORKDIR /usr/src/app

COPY  package*.json .

RUN npm install

COPY . .

# Stage 2: Run
FROM nginx:latest-alpine

COPY --from=app /front-end/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]