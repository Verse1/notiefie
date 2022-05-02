FROM nginx:1.21.6-alpine

RUN rm /etc/nginx/conf.d/*

COPY ./default.conf /etc/nginx/conf.d 
COPY ./ssl /etc/ssl

EXPOSE 80
EXPOSE 443

CMD [ "nginx", "-g", "daemon off;" ]
