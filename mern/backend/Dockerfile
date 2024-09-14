FROM node:20

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5050

CMD ["yarn", "start"]