FROM node:lts

WORKDIR /app

COPY . .
RUN rm -rf node_modules

RUN npm install

CMD ["npm", "run", "start"]