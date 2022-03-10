#Primera Etapa
#le indico la imagen de node con la que va a trabajar 
FROM node:16.13.2 as builder

ARG ARG_ANGULAR_BUILD=build-b

ARG ANGULAR_CLI_VERSION=13.2.5


RUN npm install -g @angular/cli@13.2.5

WORKDIR /app


COPY . .

# Use clean dependencies install (npm ci) instead full install (npm i)
RUN npm ci \
 && npm run build

### STAGE 2: Setup ###
FROM nginx:1.17.1-alpine

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist/vecchiolafront /usr/share/nginx/html/
