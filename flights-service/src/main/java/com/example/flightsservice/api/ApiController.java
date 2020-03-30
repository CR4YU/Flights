package com.example.flightsservice.api;

import com.example.flightsservice.entity.Airport;
import com.example.flightsservice.entity.Flight;
import com.example.flightsservice.service.AirportService;
import com.example.flightsservice.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    private AirportService airportService;
    private FlightService flightService;

    @Autowired
    public ApiController(AirportService airportService, FlightService flightService) {
        this.airportService = airportService;
        this.flightService = flightService;
    }

    @GetMapping("/airports")
    public List<Airport> allAirports() {
        return airportService.findAll();
    }

    @GetMapping("/flights")
    public List<Flight> allFlights() {
        return flightService.findAll();
    }

    @GetMapping("/flights/find")
    public List<Flight> flightsByAirports(@RequestParam String orig, @RequestParam String dest) {
        return flightService.findByAirports(orig, dest);
    }
}
