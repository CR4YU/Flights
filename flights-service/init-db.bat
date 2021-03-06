@ECHO OFF
IF "%~1"=="local" (
    echo Test database selected
    set db_env=--endpoint-url http://localhost:8000
) ELSE IF "%~1"=="prod" (
    echo Production database selected
    set db_env=""
) ELSE (
    echo No database environment provided. Use 'local' or 'prod'
    exit /b 1
)


aws dynamodb batch-write-item --request-items file://aws/data.json %db_env%