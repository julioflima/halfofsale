FROM node:12

LABEL version="1.0.0" description="Platiot" maintainer="Julio Lima<julio_flima@hotmail.com>"

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

RUN npm install pm2 -g

CMD NODE_URLS=http://*:$PORT pm2-runtime src/index.js

