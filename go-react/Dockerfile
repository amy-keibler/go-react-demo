FROM node:9.11

WORKDIR /usr/src/app

ADD package.json .
ADD package-lock.json .
RUN npm install

COPY . /usr/src/app
