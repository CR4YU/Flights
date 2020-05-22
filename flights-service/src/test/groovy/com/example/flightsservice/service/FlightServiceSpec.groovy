package com.example.flightsservice.service

import com.example.flightsservice.api.body.BookingRequestBody
import com.example.flightsservice.entity.Booking
import com.example.flightsservice.entity.Flight
import com.example.flightsservice.entity.User
import com.example.flightsservice.repository.BookingRepository
import com.example.flightsservice.repository.FlightRepository
import spock.lang.Specification

class FlightServiceSpec extends Specification {

    final static def EXAMPLE_ID = "10"

    FlightService flightService
    FlightRepository flightRepository;
    AirportService airportService;


    def setup() {
        flightService = new FlightService()
        flightRepository = Mock()
        airportService = Mock()

        flightService.flightRepository = flightRepository
        flightService.airportService = airportService
    }

    def "should find flight by id"() {
        when:
        def flight = flightService.findById(EXAMPLE_ID)

        then:
        1 * flightRepository.findById(EXAMPLE_ID) >> {String id -> new Flight(id: id, originAndDestination: "Wroclaw,London")}

        and:
        flight.id == EXAMPLE_ID
        flight.origin == "Wroclaw"
        flight.destination == "London"

    }

    def "should find flights by origin and destination" () {
        setup:
        def origin = "Wroclaw"
        def destination = "London"

        when:
        def foundFlights = flightService.findByAirports(origin, destination)

        then:
        1 * flightRepository.findByOriginAndDestinationOrderByDepartureAsc(origin + "," + destination) >> {
            String origAndDest -> [new Flight(originAndDestination: origAndDest)] * 5 }

        and:
        foundFlights.every{ f -> f.originAndDestination == origin + "," + destination}
        foundFlights.size() == 5
    }

}
