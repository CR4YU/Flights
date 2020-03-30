package com.example.flightsservice.entity;

import javax.persistence.*;
import java.time.Instant;

@Entity
public class Flight {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    @JoinColumn(name = "origin_id")
    private Airport origin;

    @OneToOne
    @JoinColumn(name = "destination_id")
    private Airport destination;

    @Column(name = "departure")
    private Instant departure;

    @Column(name = "arrival")
    private Instant arrival;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Airport getOrigin() {
        return origin;
    }

    public void setOrigin(Airport origin) {
        this.origin = origin;
    }

    public Airport getDestination() {
        return destination;
    }

    public void setDestination(Airport destination) {
        this.destination = destination;
    }

    public Instant getDeparture() {
        return departure;
    }

    public void setDeparture(Instant departure) {
        this.departure = departure;
    }

    public Instant getArrival() {
        return arrival;
    }

    public void setArrival(Instant arrival) {
        this.arrival = arrival;
    }
}
