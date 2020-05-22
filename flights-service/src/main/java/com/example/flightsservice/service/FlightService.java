package com.example.flightsservice.service;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.example.flightsservice.api.EntityNotFoundException;
import com.example.flightsservice.entity.Flight;
import com.example.flightsservice.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    AirportService airportService;



    public List<Flight> findByAirports(String orig, String dest) {
        String originAndDestination = orig + "," + dest;
        List<Flight> flights = flightRepository.findByOriginAndDestinationOrderByDepartureAsc(originAndDestination);

        for (Flight flight : flights) {
            flight.setOrigin(flight.getOriginAndDestination().split(",")[0]);
            flight.setDestination(flight.getOriginAndDestination().split(",")[1]);
        }

        return flights;
    }

    public Flight findById(String id) {
        Flight flight = Optional.ofNullable(flightRepository.findById(id)).orElseThrow(() -> new EntityNotFoundException("Flight", id));
        flight.setOrigin(flight.getOriginAndDestination().split(",")[0]);
        flight.setDestination(flight.getOriginAndDestination().split(",")[1]);

        return flight;
    }

    public Flight save(Flight flight) {
        return flightRepository.save(flight);
    }
}
