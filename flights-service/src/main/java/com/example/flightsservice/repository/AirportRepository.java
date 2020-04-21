package com.example.flightsservice.repository;

import com.example.flightsservice.entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AirportRepository extends JpaRepository<Airport, Long> {

    List<Airport> findByOrderByNameAsc();
    Optional<Airport> findByName(String name);
}
