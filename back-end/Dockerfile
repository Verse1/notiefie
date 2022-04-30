FROM node:16-alpine

WORKDIR /usr/src/app

COPY  package*.json .

RUN npm install

ARG JWT_SECRET
ARG MONGO_URI

ENV JWT_SECRET=${JWT_SECRET}
ENV MONGO_URI=${MONGO_URI}

COPY . .

EXPOSE 3001

CMD ["npm", "start"]