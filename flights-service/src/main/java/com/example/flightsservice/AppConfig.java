package com.example.flightsservice;


import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;


@Configuration
public class AppConfig {

    @Profile("dev")
    @Bean
    public DynamoDBMapper devDynamoDBMapper() {
        AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard()
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration("http://localhost:8000", "us-east-1"))
                .build();
        DynamoDBMapper dynamoDBMapper = new DynamoDBMapper(client, DynamoDBMapperConfig.DEFAULT);

        return dynamoDBMapper;
    }

    @Profile("prod")
    @Bean
    public DynamoDBMapper prodDynamoDBMapper() {
        AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard()
                .withRegion(Regions.US_EAST_1)
                .build();
        DynamoDBMapper dynamoDBMapper = new DynamoDBMapper(client, DynamoDBMapperConfig.DEFAULT);

        return dynamoDBMapper;
    }
}
