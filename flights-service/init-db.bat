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

aws dynamodb delete-table --table-name Flight %db_env%
aws dynamodb delete-table --table-name Airport %db_env%
aws dynamodb delete-table --table-name Booking %db_env%
aws dynamodb delete-table --table-name User %db_env%

aws dynamodb create-table --cli-input-json file://aws/create-table-flight.json %db_env%
aws dynamodb create-table --cli-input-json file://aws/create-table-airport.json %db_env%
aws dynamodb create-table --cli-input-json file://aws/create-table-booking.json %db_env%
aws dynamodb create-table --cli-input-json file://aws/create-table-user.json %db_env%



aws dynamodb batch-write-item --request-items file://aws/data.json %db_env%