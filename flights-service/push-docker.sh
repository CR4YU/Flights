#!/bin/sh

if [ -z "$1" ]
  then
    echo "No version has been provided."
fi

aws ecr get-login-password | docker login --username AWS --password-stdin 566538398256.dkr.ecr.us-east-1.amazonaws.com/flights
docker build --no-cache -t flights .
docker tag flights:latest 566538398256.dkr.ecr.us-east-1.amazonaws.com/flights:$1
docker push 566538398256.dkr.ecr.us-east-1.amazonaws.com/flights:$1