package com.example.flightsservice.service;

import com.example.flightsservice.entity.Airport;
import com.example.flightsservice.entity.Flight;
import com.example.flightsservice.repository.AirportRepository;
import com.example.flightsservice.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    AirportRepository airportRepository;

    public List<Flight> findAll() {
        return flightRepository.findAll();
    }

    public List<Flight> findByAirports(String orig, String dest) {
        Airport originAirport = airportRepository.findByName(orig);
        Airport destinationAirport = airportRepository.findByName(dest);

        return flightRepository.findByOriginAndDestinationOrderByDepartureAsc(originAirport, destinationAirport);
    }
}