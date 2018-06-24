FROM node:9.11

ADD package.json /tmp
ADD package-lock.json /tmp
RUN cd /tmp && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN rm -rf /usr/src/app/node_modules
RUN cp -a /tmp/node_modules /usr/src/app/
