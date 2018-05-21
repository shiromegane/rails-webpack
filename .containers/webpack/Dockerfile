FROM node:alpine
MAINTAINER Shiromegane

ENV ROOT_PATH /app
ENV WEBPACK_CONFIG_PATH $ROOT_PATH/confing/webpack
ENV WEBPACK_CONFIG_FILE $WEBPACK_CONFIG_PATH/config.js

RUN mkdir -p $WEBPACK_CONFIG_PATH
COPY config.js $WEBPACK_CONFIG_FILE
COPY package.json $ROOT_PATH/package.json

WORKDIR $ROOT_PATH
RUN yarn install
#RUN yarn add \
#      webpack \
#      webpack-cli \
#      webpack-manifest-plugin \
#      vue \
#      vue-cli \
#      vue-loader \
#      vue-router \
#      vue-html-loader \
#      vue-style-loader \
#      vue-template-compiler \
#      vuex \
#      pug \
#      autoprefixer \
#      axios \
#      babel-core \
#      babel-cli \
#      babel-loader \
#      babel-preset-env \
#      babel-preset-stage-0 \
#      babel-polyfill \
#      babel-preset-vue \
#      css-loader \
#      postcss-loader \
#      concurrently \
#      raw-loader \
#      extract-text-webpack-plugin \
#      && \
#    yarn add -D \
#      nodemon \
#      webpack-dev-server \
#      jest \
#      jest-cli \
#      vue-jest \
#      jest-serializer-vue \
#      babel-jest \
#      webpack-babel-jest
RUN export PATH=$PATH:./node_modules/.bin
CMD ["webpack", "-d", "--watch", "--config", "$WEBPACK_CONFIG_FILE"]
