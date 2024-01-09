FROM node

WORKDIR /home/marcelo/projetos/pix-management/

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]

