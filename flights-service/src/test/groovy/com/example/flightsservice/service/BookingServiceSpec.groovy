package com.example.flightsservice.service

import com.example.flightsservice.api.body.BookingRequestBody
import com.example.flightsservice.entity.Booking
import com.example.flightsservice.entity.Flight
import com.example.flightsservice.entity.User
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
    }

    def "should find booking by id"() {
        when:
        def booking = bookingService.findById(EXAMPLE_ID)

        then:
        1 * bookingRepository.findById(EXAMPLE_ID) >> {String id -> new Booking(id: id)}
        booking.id == EXAMPLE_ID

    }

    def "should save booking from BookingRequestBody object" () {
        setup:
        def bookingRequestBody = exampleBookingRequestBody()

        when:
        def booking = bookingService.save(bookingRequestBody)

        then:
        1 * userService.findByLogin(_ as String) >> {String login -> new User(login: login)}
        1 * flightService.findById(_ as String) >> {String id -> new Flight(id: id)}
        1 * bookingRepository.save(_ as Booking) >> {Booking b -> b.id = EXAMPLE_ID; b}

        booking.id == EXAMPLE_ID
        booking.userLogin == bookingRequestBody.user
        booking.seats == bookingRequestBody.getSeatsComaSeparated()
        booking.flightId == bookingRequestBody.flightId
        booking.bundle == bookingRequestBody.bundle
    }

    static def exampleBookingRequestBody() {
        def bookingRequestBody = new BookingRequestBody()
        bookingRequestBody.bundle = "basic"
        bookingRequestBody.flightId = "1"
        bookingRequestBody.user = "jrambo"
        bookingRequestBody.seats = "1A,2C"
        return bookingRequestBody
    }
}
