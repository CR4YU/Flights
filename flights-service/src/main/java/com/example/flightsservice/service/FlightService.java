package com.example.flightsservice.service;

import com.example.flightsservice.api.EntityNotFoundException;
import com.example.flightsservice.entity.Airport;
import com.example.flightsservice.entity.Flight;
import com.example.flightsservice.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    AirportService airportService;

    public List<Flight> findAll() {
        return flightRepository.findAll();
    }

    public List<Flight> findByAirports(String orig, String dest) {
        Airport originAirport = airportService.findByName(orig);
        Airport destinationAirport = airportService.findByName(dest);

        return flightRepository.findByOriginAndDestinationOrderByDepartureAsc(originAirport, destinationAirport);
    }

    public Flight findById(Long id) {
        return flightRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Flight", id));
    }
}
