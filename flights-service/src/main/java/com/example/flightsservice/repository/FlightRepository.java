package com.example.flightsservice.repository;

import com.example.flightsservice.entity.Airport;
import com.example.flightsservice.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {
    List<Flight> findAll();
    List<Flight> findByOriginAndDestinationOrderByDepartureAsc(Airport origin, Airport destination);
}