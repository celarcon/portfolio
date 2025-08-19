FROM node:22.14.0-alpine as builder
WORKDIR /frontend
COPY package*.json /frontend/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /frontend/dist .
COPY ./conf/nginx.conf /etc/nginx/

EXPOSE 80
EXPOSE 443