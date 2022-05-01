FROM node:16-alpine

WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

RUN npm run build

CMD /wait && npm start