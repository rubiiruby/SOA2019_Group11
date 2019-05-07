FROM node:11.13.0
WORKDIR /work
COPY package*.json ./
RUN npm install -qy
COPY . .

EXPOSE 3000
CMD ["npm", "start"]