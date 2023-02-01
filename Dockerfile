FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]

#Correr imagen = docker build . -t name-image
#Correr contenedor = docker run -it --rm -p 3000:3000 name-image