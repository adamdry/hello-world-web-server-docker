FROM ubuntu:18.04

ENV APP_DIR /var/node-ws

RUN mkdir -p $APP_DIR

WORKDIR $APP_DIR

RUN apt-get update
RUN apt-get install -y --no-install-recommends apt-utils
RUN apt-get upgrade -y

# install node
RUN apt-get install -y nodejs npm

COPY ./main.js $APP_DIR/main.js
COPY ./node_modules/ $APP_DIR/node_modules/

CMD [ "node", "main.js" ]