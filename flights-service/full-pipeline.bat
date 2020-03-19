@echo off
IF "%~1"=="" (
    echo No version has been provided.
    exit 0
)

call mvnw clean package
call push-docker.bat %1
call run-stack.bat %1