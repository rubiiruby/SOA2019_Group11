FROM node:11.13.0
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir -p /usr/src/app
EXPOSE 3001
WORKDIR /usr/src/app
ADD package.json /usr/src/app/
RUN npm install 
ADD . /usr/src/app/
ENTRYPOINT ["node", "server"]

# # base image
# FROM node:11.13.0

# # set working directory
# WORKDIR /
# COPY . .
# RUN npm install
# EXPOSE 3001

# CMD ["node", "server"]

