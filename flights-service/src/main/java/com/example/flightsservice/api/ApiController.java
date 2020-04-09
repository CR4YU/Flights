package com.example.flightsservice.api;

import com.example.flightsservice.entity.Airport;
import com.example.flightsservice.entity.Flight;
import com.example.flightsservice.service.AirportService;
import com.example.flightsservice.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/flights/{id}")
    public ResponseEntity<Flight> flightById(@PathVariable Long id) {
        return flightService.findById(id)
                .map(flight -> ResponseEntity.ok().body(flight))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
