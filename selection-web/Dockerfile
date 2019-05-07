FROM node:11.13.0
WORKDIR /work
COPY package*.json ./
RUN npm install -qy
RUN npm install react-scripts -g
COPY . .

EXPOSE 3000
CMD ["npm", "start"]