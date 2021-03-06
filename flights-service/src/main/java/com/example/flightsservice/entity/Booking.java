package com.example.flightsservice.entity;

import com.amazonaws.services.dynamodbv2.datamodeling.*;


import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@DynamoDBTable(tableName="Booking")
public class Booking {

    private String id;

    @NotNull
    private String userLogin;

    private User user;

    @NotNull
    private String flightId;

    private Flight flight;

    @Pattern(regexp = "(\\d{1,2}[a-zA-Z],)*(\\d{1,2}[a-zA-Z])")
    @NotEmpty
    private String seats;

    private String bundle;


    @DynamoDBHashKey(attributeName = "Id")
    @DynamoDBAutoGeneratedKey
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @DynamoDBAttribute(attributeName = "UserLogin")
    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    @DynamoDBIgnore
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @DynamoDBAttribute(attributeName = "FlightId")
    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    @DynamoDBIgnore
    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    @DynamoDBAttribute(attributeName = "Seats")
    public String getSeats() {
        return seats;
    }

    public void setSeats(String seats) {
        this.seats = seats;
    }

    @DynamoDBAttribute(attributeName = "Bundle")
    public String getBundle() {
        return bundle;
    }

    public void setBundle(String bundle) {
        this.bundle = bundle;
    }
}
