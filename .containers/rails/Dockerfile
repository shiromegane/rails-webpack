FROM ruby:alpine
MAINTAINER Shiromegane

ENV LANG C.UTF-8
ENV BUILD_PATH /tmp
ENV ROOT_PATH /app

WORKDIR $BUILD_PATH
COPY Gemfile.default $BUILD_PATH/Gemfile
COPY Gemfile.lock $BUILD_PATH/Gemfile.lock

RUN apk update && apk upgrade && \
    apk add --update --no-cache --virtual build-dependencies \
      build-base curl-dev linux-headers  libxml2-dev libxslt-dev \
      ruby-dev yaml-dev zlib-dev mysql-dev && \
    apk add --update --no-cache bash git vim nodejs less \
      mysql-client ruby-json tzdata yaml imagemagick && \
    gem install bundler && bundle install -j4 && \
    apk del build-dependencies
# bundle installはコンテナ内でやらない方がいいらしい
WORKDIR $ROOT_PATH
COPY . $ROOT_PATH
