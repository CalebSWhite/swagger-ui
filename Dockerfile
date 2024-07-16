# Stage 1
FROM node:18-alpine as vite-build
WORKDIR /app
COPY ./app/ .
RUN npm install
RUN npm run-script build

# Stage 2 - the production environment
FROM nginx:alpine
LABEL name "swagger-ui"
LABEL maintainer "calebswhite"

ENV URLS="[{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop'},{url: 'https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml', name: 'Instagram'}]"
ENV THEME_COLOR="#32329f"
ENV PAGE_TITLE="Swagger Ui"

WORKDIR /var/www/html

COPY --from=vite-build /app/dist /var/www/html
COPY ./docker/run.sh /
COPY ./docker/default.conf /etc/nginx/conf.d

RUN chmod +x /run.sh
RUN chmod +x /etc/nginx/conf.d/default.conf

CMD ["/run.sh"]
