
FROM node:12

LABEL version="1.0.0" description="Platiot" maintainer="Julio Lima<julio_flima@hotmail.com>"

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 80

CMD NODE_URLS=http://*:$PORT npm start

