package com.example.flightsservice.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.example.flightsservice.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository  {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public User findByLogin(String login) {
        return dynamoDBMapper.load(User.class, login);
    }
}
