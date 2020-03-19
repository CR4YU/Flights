package com.example.flightsservice.repository;

import com.example.flightsservice.entity.Airport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirportRepository extends CrudRepository<Airport, Long> {
    List<Airport> findAll();
}
