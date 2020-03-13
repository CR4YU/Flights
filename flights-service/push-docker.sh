#!/bin/sh

aws ecr get-login-password | docker login --username AWS --password-stdin 566538398256.dkr.ecr.us-east-1.amazonaws.com/flights
docker build --no-cache -t flights .
docker tag flights:latest 566538398256.dkr.ecr.us-east-1.amazonaws.com/flights:latest
docker push 566538398256.dkr.ecr.us-east-1.amazonaws.com/flights:latest