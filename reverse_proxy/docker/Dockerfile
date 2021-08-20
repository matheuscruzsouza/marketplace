### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY ../frontend/package.json ../package-lock.json ./
RUN npm install
COPY ../frontend .
RUN npm run build_prod

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ConexaSaude /usr/share/nginx/html
