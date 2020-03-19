@ECHO OFF
IF "%~1"=="" (
    echo No version has been provided.
    exit 0
)

call cf sync --parameter "app-stack.time=%date%-%time%" --parameter "app-stack.version=%1" aws/master-stack.yml --confirm