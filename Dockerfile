FROM node:12

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# install dependencies
RUN npm i

# Copy files
COPY . .

# PORT
EXPOSE 2020

# Run Script
CMD ["npm", "start"]
