@ECHO OFF
IF "%~1"=="" (
    echo No version has been provided.
    exit 0
)

call aws ecr get-login-password | docker login --username AWS --password-stdin 566538398256.dkr.ecr.us-east-1.amazonaws.com/flights
call docker build --no-cache -t flights .
call docker tag flights:latest 566538398256.dkr.ecr.us-east-1.amazonaws.com/flights:%1
call docker push 566538398256.dkr.ecr.us-east-1.amazonaws.com/flights:%1