package com.example.flightsservice.api;

import com.example.flightsservice.api.body.BookingRequestBody;
import com.example.flightsservice.entity.Airport;
import com.example.flightsservice.entity.Booking;

import com.example.flightsservice.entity.Flight;
import com.example.flightsservice.service.AirportService;
import com.example.flightsservice.service.BookingService;
import com.example.flightsservice.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class ApiController {

    private AirportService airportService;
    private FlightService flightService;
    private BookingService bookingService;

    @Autowired
    public ApiController(AirportService airportService, FlightService flightService, BookingService bookingService) {
        this.airportService = airportService;
        this.flightService = flightService;
        this.bookingService = bookingService;
    }

    @GetMapping("/airports")
    public List<Airport> allAirports() {
        return airportService.findAll();
    }

    @GetMapping("/flights/find")
    public List<Flight> flightsByAirports(@RequestParam String orig, @RequestParam String dest) {
        return flightService.findByAirports(orig, dest);
    }

    @GetMapping("/flights/{id}")
    public Flight flightById(@PathVariable String id) {
        return flightService.findById(id);
    }

    @PostMapping("/booking")
    public Booking createBooking(@RequestBody @Valid BookingRequestBody bookingRequestBody) {
        return bookingService.save(bookingRequestBody);
    }

    @GetMapping("/booking/{id}")
    public Booking bookingById(@PathVariable String id) {
        return bookingService.findById(id);
    }
}
