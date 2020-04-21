package com.example.flightsservice.service;

import com.example.flightsservice.api.EntityNotFoundException;
import com.example.flightsservice.entity.Airport;
import com.example.flightsservice.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirportService {

    @Autowired
    private AirportRepository airportRepository;

    public List<Airport> findAll() {
        return airportRepository.findByOrderByNameAsc();
    }

    public Airport findByName(String name) {
        return airportRepository.findByName(name).orElseThrow(() -> new EntityNotFoundException("Airport", name));
    }
}
