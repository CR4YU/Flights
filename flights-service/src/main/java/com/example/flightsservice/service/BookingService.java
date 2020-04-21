package com.example.flightsservice.service;

import com.example.flightsservice.api.EntityNotFoundException;
import com.example.flightsservice.api.body.BookingRequestBody;
import com.example.flightsservice.entity.Booking;
import com.example.flightsservice.entity.Flight;
import com.example.flightsservice.entity.User;
import com.example.flightsservice.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    UserService userService;

    @Autowired
    FlightService flightService;


    public Booking save(BookingRequestBody bookingRequestBody) {
        User user = userService.findByLogin(bookingRequestBody.getUser());
        String seats = bookingRequestBody.getSeatsComaSeparated();
        Flight flight = flightService.findById(bookingRequestBody.getFlightId());

        flight.addTakenSeats(seats);

        Booking booking = new Booking();
        booking.setFlight(flight);
        booking.setSeats(seats);
        booking.setUser(user);

        bookingRepository.save(booking);
        return booking;
    }

}
