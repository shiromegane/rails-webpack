FROM ruby:latest
MAINTAINER Shiromegane

ENV LANG C.UTF-8
ENV BUILD_PATH /tmp
ENV ROOT_PATH /app

RUN apt-get update -qq && apt-get install -y build-essential \
        mysql-client \
        nodejs \
        libxml2 \
        libxml2-dev \
        libxslt1-dev \
        zlib1g \
        zlib1g-dev \
        && apt-get clean

WORKDIR $BUILD_PATH
COPY Gemfile $BUILD_PATH/Gemfile
COPY Gemfile.lock $BUILD_PATH/Gemfile.lock
RUN bundle install -j4

WORKDIR $ROOT_PATH