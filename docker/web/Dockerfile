FROM node:15.12.0

ENV ENV_NAME dev
ENV EGG_SERVER_ENV dev
ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
# CMD ["tail", "-f", "/dev/null"]