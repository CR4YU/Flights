package com.example.flightsservice.service;

import com.example.flightsservice.api.EntityNotFoundException;
import com.example.flightsservice.api.body.BookingRequestBody;
import com.example.flightsservice.entity.Booking;
import com.example.flightsservice.entity.Flight;
import com.example.flightsservice.entity.User;
import com.example.flightsservice.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    UserService userService;

    @Autowired
    FlightService flightService;


    public Booking save(BookingRequestBody bookingRequestBody) {
        User user = Optional.ofNullable(userService.findByLogin(bookingRequestBody.getUser())).orElseThrow(() ->
                new EntityNotFoundException("Booking", bookingRequestBody.getUser()));

        String seats = bookingRequestBody.getSeatsComaSeparated();
        String bundle = bookingRequestBody.getBundle();
        Flight flight = flightService.findById(bookingRequestBody.getFlightId());

        flight.addTakenSeats(seats);

        Booking booking = new Booking();
        booking.setFlight(flight);
        booking.setFlightId(flight.getId());
        booking.setSeats(seats);
        booking.setUser(user);
        booking.setUserLogin(user.getLogin());
        booking.setBundle(bundle);

        bookingRepository.save(booking);
        return booking;
    }

    public Booking findById(String id) {
        Booking booking = Optional.ofNullable(bookingRepository.findById(id)).orElseThrow(() -> new EntityNotFoundException("Booking", id));
        booking.setFlight(flightService.findById(booking.getFlightId()));
        booking.setUser(userService.findByLogin(booking.getUserLogin()));

        return booking;
    }

}
