package com.example.flightsservice.service

import com.example.flightsservice.entity.Booking
import com.example.flightsservice.repository.BookingRepository
import spock.lang.Specification

class BookingServiceSpec extends Specification {


    final static def EXAMPLE_ID = "10"

    BookingService bookingService

    BookingRepository bookingRepository;
    UserService userService;
    FlightService flightService;


    def setup() {
        bookingService = new BookingService()
        bookingRepository = Mock()
        userService = Mock()
        flightService = Mock()
        bookingService.bookingRepository = bookingRepository
        bookingService.flightService = flightService
        bookingService.userService = userService

        Booking booking = new Booking()
        booking.id = EXAMPLE_ID

        bookingRepository.findById(EXAMPLE_ID) >> booking

    }

    def "should find booking by id"() {
        setup:
        def booking

        when:
        booking = bookingService.findById(EXAMPLE_ID)

        then:
        booking.id == EXAMPLE_ID
    }

    def "should save booking" () {

    }
}
