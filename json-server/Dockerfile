# pull the base image
FROM node:16-alpine
RUN npm i --location=global corepack

# set the working direction
WORKDIR /server

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY yarn.lock ./

RUN yarn install
EXPOSE 5000
# add app
COPY . ./

# start app
CMD ["yarn", "server"]