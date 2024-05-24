# Dockerfile para el cliente (Angular)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]  # Asegúrate de tener "start": "ng serve" en package.json
