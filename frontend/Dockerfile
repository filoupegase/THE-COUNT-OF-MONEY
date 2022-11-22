FROM node:lts

WORKDIR /app

COPY . .
RUN rm -rf node_modules

RUN npm install yarn

RUN yarn install

CMD ["yarn", "start"]