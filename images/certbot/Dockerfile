FROM certbot/certbot

RUN apk add --no-cache bash 

COPY entrypoint /bin/entrypoint

ENTRYPOINT ["entrypoint"]

RUN wget -O /usr/bin/yq "https://github.com/mikefarah/yq/releases/download/3.3.0/yq_linux_amd64" && chmod +x /usr/bin/yq
