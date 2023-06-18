FROM node:16

LABEL com.centurylinklabs.watchtower.monitor-only="true"

EXPOSE 80

COPY . .

RUN npm install

CMD node index.js
