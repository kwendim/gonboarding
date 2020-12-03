#!/bin/sh -eu
./add_backend.sh > /usr/share/nginx/html/config.js
nginx -g "daemon off;"