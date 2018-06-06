FROM node:alpine
MAINTAINER Shiromegane

ENV ROOT_PATH=/webpack \
    NODE_MODULES_PATH=/node_modules

ENV WEBPACK_CONFIG_PATH $ROOT_PATH/config/webpack
ENV WEBPACK_CONFIG_FILE $WEBPACK_CONFIG_PATH/config.js

RUN apk upgrade --no-cache && apk add --update --no-cache git

COPY config.js $WEBPACK_CONFIG_FILE
COPY package.json $ROOT_PATH/package.json
COPY .babelrc $ROOT_PATH/.babelrc
COPY .eslintrc $ROOT_PATH/.eslintrc

WORKDIR $ROOT_PATH
RUN yarn install

RUN export PATH=$PATH:$NODE_MODULES_PATH/.bin

CMD ["webpack", "-d", "--watch", "--config", "$WEBPACK_CONFIG_FILE"]
