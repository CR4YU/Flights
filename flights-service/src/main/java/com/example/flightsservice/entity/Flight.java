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

    @Column(name = "ticket_price", precision = 10, scale = 2)
    private Double ticketPrice;

    @Column(name = "currency")
    private String currency;

    @Column(name = "num_seats_columns")
    private Integer numSeatsColumns;

    @Column(name = "num_seats_rows")
    private Integer numSeatsRows;

    @Column(name = "taken_seats")
    private String takenSeats;


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

    public Double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(Double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Integer getNumSeatsColumns() {
        return numSeatsColumns;
    }

    public void setNumSeatsColumns(Integer numSeatsColumns) {
        this.numSeatsColumns = numSeatsColumns;
    }

    public Integer getNumSeatsRows() {
        return numSeatsRows;
    }

    public void setNumSeatsRows(Integer numSeatsRows) {
        this.numSeatsRows = numSeatsRows;
    }

    public String getTakenSeats() {
        return takenSeats;
    }

    public void setTakenSeats(String takenSeats) {
        this.takenSeats = takenSeats;
    }
}
