FROM certbot/certbot

RUN apk add --no-cache bash 

COPY entrypoint /bin/entrypoint

ENTRYPOINT ["entrypoint"]