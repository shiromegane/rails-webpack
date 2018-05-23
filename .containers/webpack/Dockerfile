FROM node:alpine
MAINTAINER Shiromegane

ENV ROOT_PATH /application
ENV WEBPACK_CONFIG_PATH $ROOT_PATH/config/webpack
ENV WEBPACK_CONFIG_FILE $WEBPACK_CONFIG_PATH/config.js
ENV NODE_MODULES_PATH $ROOT_PATH/node_modules

RUN apk upgrade --no-cache && apk add --update --no-cache git

COPY config.js $WEBPACK_CONFIG_FILE
COPY package.json $ROOT_PATH/package.json
COPY .babelrc $ROOT_PATH/.babelrc
COPY .eslintrc $ROOT_PATH/.eslintrc

WORKDIR $ROOT_PATH
RUN yarn install

RUN export PATH=$PATH:$NODE_MODULES_PATH/.bin

CMD ["webpack", "-d", "--watch", "--config", "$WEBPACK_CONFIG_FILE"]
