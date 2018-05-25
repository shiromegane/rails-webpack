FROM ruby:alpine
MAINTAINER Shiromegane

ENV TZ=Asia/Tokyo \
    LANG=C.UTF-8 \
    ROOT_PATH=/app \
    BUILD_PATH=/tmp
ENV BUNDLE_PATH=$BUILD_PATH/bundle \
    BUNDLE_JOBS=16
    BUNDLE_GEMFILE=$BUILD_PATH/Gemfile

WORKDIR $BUILD_PATH
COPY Gemfile $BUILD_PATH/Gemfile
COPY Gemfile.lock $BUILD_PATH/Gemfile.lock

RUN apk upgrade --no-cache && apk add --update --no-cache \
      vim \
      mysql-dev \
      libidn-dev \
      nodejs \
      ruby-json \
      tzdata \
      yaml \
      ffmpeg \
      imagemagick && \
    apk add --update --no-cache --virtual=build-dependencies \
      git \
      build-base \
      ca-certificates \
      curl-dev \
      linux-headers \
      libxml2-dev \
      libxslt-dev \
      ruby-dev \
      yaml-dev \
      python2 \
      zlib-dev && \
    npm install -g yarn && \
    gem install bundler && \
    bundle config path $BUNDLE_PATH && \
    bundle config jobs $BUNDLE_JOBS && \
    bundle install && \
    apk del build-dependencies && \
    rm -rf /usr/bin/mysql*

WORKDIR $ROOT_PATH

CMD ["bundle", "exec", "rails", "s", "-b", "0"]
