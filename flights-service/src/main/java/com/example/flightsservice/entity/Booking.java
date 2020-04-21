package com.example.flightsservice.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Data
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    @NotNull
    private User user;

    @OneToOne
    @JoinColumn(name = "flight_id")
    @NotNull
    private Flight flight;

    @Column(name = "seats")
    @Pattern(regexp = "(\\d{1,2}[a-zA-Z],)*(\\d{1,2}[a-zA-Z])")
    @NotEmpty
    private String seats;

}
