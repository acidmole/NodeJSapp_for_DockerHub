FROM node:16

LABEL com.centurylinklabs.watchtower.monitor-only="true"

COPY . .

RUN npm install

CMD node index.js
