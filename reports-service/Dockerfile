FROM node:11.13.0
WORKDIR /work
COPY package*.json ./
RUN npm install -qy
COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait

EXPOSE 3003
CMD ["npm", "start"]