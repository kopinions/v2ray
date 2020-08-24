FROM haproxy

RUN apt-get update && apt-get install -y \
    nodejs npm inotify-tools  && rm -rf /var/lib/apt/lists/*
RUN npm install -g hbs-cli js-yaml

ENTRYPOINT ["entrypoint"]
COPY entrypoint /bin/entrypoint
