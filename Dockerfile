# just a comment

FROM node:alpine

WORKDIR /

COPY ./ ./

RUN npm install

CMD ["npm", "start"]
