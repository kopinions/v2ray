FROM nginx

RUN apt update && apt install --no-install-recommends --no-install-suggests -y inotify-tools

COPY entrypoint /bin/entrypoint

ENTRYPOINT ["entrypoint"]