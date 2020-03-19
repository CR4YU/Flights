#!/bin/sh

if [ -z "$1" ]
  then
    echo "No version has been provided."
fi

./mvnw clean package
./push-docker.sh $1
./run-stack.sh $1