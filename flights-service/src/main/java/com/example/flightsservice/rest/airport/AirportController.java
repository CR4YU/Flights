package com.example.flightsservice.rest.airport;

import com.example.flightsservice.entity.Airport;
import com.example.flightsservice.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AirportController {

    private AirportService airportService;

    @Autowired
    public AirportController(AirportService airportService) {
        this.airportService = airportService;
    }

    @GetMapping("/airports")
    public List<Airport> allAirports() {
        return airportService.findAll();
    }
}
