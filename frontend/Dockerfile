# FROM node:latest
# WORKDIR /frontend
# COPY . /frontend/
# # COPY ./build/ /frontend/
# CMD npm install
# CMD npm start

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./build .
COPY docker-entrypoint.sh .
COPY add_backend.sh .
RUN chmod +x add_backend.sh
RUN chmod +x docker-entrypoint.sh