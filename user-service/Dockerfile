FROM node:11.13.0
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "npm", "run", "start" ]