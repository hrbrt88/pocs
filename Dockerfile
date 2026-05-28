# Dockerfile for Flappy Bird MK64 Static Site
FROM nginx:alpine as builder

# Copy game files to nginx container
COPY ./game.html /usr/share/nginx/html/game.html
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./style.css /usr/share/nginx/html/style.css
COPY ./package.json /usr/share/nginx/html/package.json 2>/dev/null || true

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]