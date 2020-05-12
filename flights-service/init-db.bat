aws dynamodb delete-table --table-name Flight --endpoint-url http://localhost:8000
aws dynamodb delete-table --table-name Airport --endpoint-url http://localhost:8000
aws dynamodb delete-table --table-name Booking --endpoint-url http://localhost:8000
aws dynamodb delete-table --table-name User --endpoint-url http://localhost:8000

aws dynamodb create-table --cli-input-json file://aws/create-table-flight.json --endpoint-url http://localhost:8000
aws dynamodb create-table --cli-input-json file://aws/create-table-airport.json --endpoint-url http://localhost:8000
aws dynamodb create-table --cli-input-json file://aws/create-table-booking.json --endpoint-url http://localhost:8000
aws dynamodb create-table --cli-input-json file://aws/create-table-user.json --endpoint-url http://localhost:8000

aws dynamodb batch-write-item --request-items file://aws/data.json --endpoint-url http://localhost:8000