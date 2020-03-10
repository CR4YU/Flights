#!/bin/bash
set -e

if [ "$1" = 'default' ]; then
    cd /server
    java -jar flights-service-0.0.1-SNAPSHOT.jar
else
  exec "$@"
fi
