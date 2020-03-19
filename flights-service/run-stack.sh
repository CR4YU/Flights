#!/bin/sh

if [ -z "$1" ]
  then
    echo "No version has been provided."
fi

timestamp=`time`
cf sync --parameter "app-stack.time=$timestamp" --parameter "app-stack.version=$1" aws/master-stack.yml --confirm