package com.example.flightsservice.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.example.flightsservice.entity.Airport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class AirportRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public List<Airport> findAll() {
        return dynamoDBMapper.scan(Airport.class, new DynamoDBScanExpression());
    }


}
