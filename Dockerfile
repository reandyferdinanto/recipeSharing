FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ENV NODE_ENV=production
ENV TZ="Asia/Jakarta"

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]