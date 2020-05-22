package com.example.flightsservice.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.example.flightsservice.entity.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FlightRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public Flight findById(String id) {
        return dynamoDBMapper.load(Flight.class, id);
    }

    public List<Flight> findByOriginAndDestinationOrderByDepartureAsc(String originAndDestination){

        Flight flight = new Flight();
        flight.setOriginAndDestination(originAndDestination);

        DynamoDBQueryExpression<Flight> expression = new DynamoDBQueryExpression<Flight>()
                .withIndexName("FlightGSI1")
                .withConsistentRead(false)
                .withHashKeyValues(flight);

        List<Flight> results = dynamoDBMapper.query(Flight.class, expression);
        return results;
    }

    public Flight save(Flight flight) {
        dynamoDBMapper.save(flight);
        return flight;
    }
}
