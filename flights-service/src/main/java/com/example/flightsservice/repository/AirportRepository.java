package com.example.flightsservice.repository;

import com.example.flightsservice.entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirportRepository extends JpaRepository<Airport, Long> {
    List<Airport> findByOrderByNameAsc();
    Airport findByName(String name);
}
