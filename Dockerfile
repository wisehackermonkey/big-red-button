# Install the app dependencies in a full Node docker image
FROM node:10
  
WORKDIR "/app"

# Install OS updates 
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install 
RUN npm install -g babel-cli
COPY ./backend /app/backend
COPY ./compiled /app/compiled

RUN ./node_modules/.bin/babel -d ./compiled ./backend -s && echo " building babel"


# Copy the dependencies into a Slim Node docker image
FROM node:10-slim
  
WORKDIR "/app"

# Install OS updates 
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Install app dependencies
COPY --from=0 /app/node_modules /app/node_modules
COPY --from=0 /app/compiled /app/compiled
RUN ls /app/compiled && echo "file form compiled folder"
RUN npm install -g babel-cli

COPY . /app

ENV NODE_ENV production
ENV PORT 80

USER node

EXPOSE 80
CMD ["npm", "run","start"]
