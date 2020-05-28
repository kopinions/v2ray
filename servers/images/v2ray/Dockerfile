FROM v2ray/official

RUN apk add --no-cache bash nodejs npm
RUN npm install -g hbs-cli js-yaml

COPY entrypoint /bin/entrypoint

ENTRYPOINT ["entrypoint"]
CMD ["v2ray", "-config=/etc/v2ray/config.json"]