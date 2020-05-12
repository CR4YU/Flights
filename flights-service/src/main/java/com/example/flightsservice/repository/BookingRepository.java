package com.example.flightsservice.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.example.flightsservice.entity.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BookingRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public Booking save(Booking booking) {
        dynamoDBMapper.save(booking);
        return booking;
    }

    public Booking findById(String id) {
       return dynamoDBMapper.load(Booking.class, id);
    }

}
