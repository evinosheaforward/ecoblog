
ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /frontend
WORKDIR /frontend
COPY ./frontend ./

RUN npm install

RUN npm install react-router-dom
RUN npm install --save react react-dom
RUN	npm install --save react-bootstrap
RUN npm install --save react-router-bootstrap
RUN npm install semantic-ui-react
RUN npm install react-format-text

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 8080; \
	else \
	npm run start; \
	fi

EXPOSE 3080
