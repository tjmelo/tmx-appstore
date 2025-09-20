FROM node:20-alpine

ENV TMX_PATH tmx-appstore \
    TMX_NAME "TMX App Store"

LABEL name=${TMX_NAME}

LABEL description="That's a little template open source to a virtual store. There are several concepts across developmenting of this virtual store. "

WORKDIR /${TMX_PATH}

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
