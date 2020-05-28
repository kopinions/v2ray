FROM haproxy

RUN apt-get update && apt-get install -y \
    nodejs npm && rm -rf /var/lib/apt/lists/*
RUN npm install -g hbs-cli js-yaml

ENTRYPOINT ["entrypoint"]
CMD ["haproxy", "-f", "/usr/local/etc/haproxy/haproxy.cfg"]
COPY entrypoint /bin/entrypoint
