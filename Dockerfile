FROM public.ecr.aws/docker/library/node:18-alpine


WORKDIR /usr/src/app

COPY package.json .

RUN npm install
COPY . .
RUN npm run dev:build

EXPOSE 4000
CMD [ "node", "lib/main.js" ]