# just a comment

FROM node:alpine

COPY ./ ./

RUN npm install

CMD ["npm", "start"]
