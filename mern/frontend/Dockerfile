FROM node:20

WORKDIR /app

COPY package.json .

RUN yarn install

EXPOSE 5173

COPY . .

CMD ["yarn", "run", "dev"]