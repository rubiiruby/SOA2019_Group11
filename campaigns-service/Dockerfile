FROM node:11.13.0
WORKDIR /work
COPY package*.json ./
RUN npm install -qy
COPY . .
EXPOSE 3002
CMD ["npm", "start"]