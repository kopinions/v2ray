FROM haproxy

RUN apt-get update && apt-get install -y \
    node && rm -rf /var/lib/apt/lists/*
RUN npm install -g hbs-cli js-yaml
COPY entrypoint /bin/entrypoint

ENTRYPOINT ["entrypoint"]
CMD ["haproxy", "-f", "/usr/local/etc/haproxy/haproxy.cfg"]