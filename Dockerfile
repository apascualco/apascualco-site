FROM --platform=$BUILDPLATFORM node:22-alpine AS build
WORKDIR /src
ENV HUSKY=0
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.29.3-alpine
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist /usr/share/nginx/html
EXPOSE 8080
