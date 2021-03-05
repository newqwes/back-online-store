FROM node:15

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3005

CMD [ "yarn", "start" ]
