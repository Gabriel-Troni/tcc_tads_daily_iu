FROM node:22.20.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm ci --omit=dev

EXPOSE 3030

CMD ["node", "dist/index.js"]