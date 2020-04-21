package com.example.flightsservice.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.Instant;

@Entity
@Data
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "origin_id")
    @NotNull
    private Airport origin;

    @OneToOne
    @JoinColumn(name = "destination_id")
    @NotNull
    private Airport destination;

    @Column(name = "departure")
    @NotNull
    private Instant departure;

    @Column(name = "arrival")
    @NotNull
    private Instant arrival;

    @Column(name = "ticket_price", precision = 10, scale = 2)
    @NotNull
    @PositiveOrZero
    private Double ticketPrice;

    @Column(name = "currency")
    @NotEmpty
    @Pattern(regexp = "[a-zA-Z]{3}")
    private String currency;

    @Column(name = "num_seats_columns")
    @Min(1)
    @Max(20)
    private Integer numSeatsColumns;

    @Column(name = "num_seats_rows")
    @Min(1)
    @Max(100)
    private Integer numSeatsRows;

    @Column(name = "taken_seats")
    private String takenSeats;

    public void addTakenSeats(String newSeats) {
        takenSeats += "," + newSeats;
    }
}
