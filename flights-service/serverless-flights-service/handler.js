'use strict';
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

module.exports.airports = async event => {
    console.log("request: " + JSON.stringify(event));

    let params = {
        TableName: "Airport"
    };
    let airports;
    let statusCode;

    const onScan = (err, data) => {
        if (err) {
            console.log("Scan Failed. Error: " + err, err.stack);
            statusCode = 400;
        } else {
            airports = data.Items;
            statusCode = 200;
        }
    };

    await ddb.scan(params, onScan).promise();

    let responseBody = {
        message: airports,
        input: event
    };


    let response = {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response));
    return response;
};

module.exports.flightsByOriginAndDestination = async event => {
    console.log("request: " + JSON.stringify(event));

    const origin = event.queryStringParameters.orig;
    const destination = event.queryStringParameters.dest;
    const originAndDestination = origin + ',' + destination;

    let params = {
        TableName: "Flight",
        IndexName: "FlightGSI1",
        KeyConditionExpression: "OriginAndDestination = :origAndDest",
        ExpressionAttributeValues: {
            ":origAndDest": originAndDestination
        }
    };
    let flights;
    let statusCode;

    const onQuery = (err, data) => {
        if (err) {
            console.log("Scan Failed. Error: " + err, err.stack);
            statusCode = 400;
        } else {
            flights = data.Items;
            statusCode = 200;
        }
    };

    await ddb.query(params, onQuery).promise();

    let responseBody = {
        message: flights,
        input: event
    };


    let response = {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response));
    return response;
};
