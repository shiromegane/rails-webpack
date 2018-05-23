FROM ruby:alpine
MAINTAINER Shiromegane

ENV TZ=Asia/Tokyo
ENV LANG C.UTF-8
ENV BUILD_PATH /tmp
ENV ROOT_PATH /app
ENV BUNDLE_PATH $BUILD_PATH/vendor/bundle

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
    bundle config jobs 4 && \
    bundle install && \
    apk del build-dependencies && \
    rm -rf /usr/bin/mysql*

WORKDIR $ROOT_PATH

CMD ["bundle", "exec", "rails", "s", "-b", "0"]
