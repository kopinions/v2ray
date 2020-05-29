FROM v2ray/official

RUN apk add --no-cache bash nodejs npm
RUN npm install -g hbs-cli js-yaml

ENTRYPOINT ["entrypoint"]
CMD ["v2ray", "-config=/etc/v2ray/config.json"]

COPY entrypoint /bin/entrypoint
