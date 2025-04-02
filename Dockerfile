FROM node:20-alpine

MAINTAINER Hrabynsky

RUN mkdir /app
WORKDIR /app

COPY ./backend/package.json .

RUN npm i