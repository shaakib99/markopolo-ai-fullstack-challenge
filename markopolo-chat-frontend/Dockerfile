FROM  node:22.18

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 3000

CMD [ "serve", "-s", "build", "-l","tcp://0.0.0.0:3000"]