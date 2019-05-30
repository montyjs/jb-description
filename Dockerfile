FROM node:12.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

RUN yarn global add nodemon

EXPOSE 8080

CMD [ "npm", "run", "start" ]