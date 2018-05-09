FROM nginx:alpine
MAINTAINER Shiromegane

RUN rm -f /etc/nginx/conf.d/*
COPY default.conf /etc/nginx/conf.d/app.conf
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf