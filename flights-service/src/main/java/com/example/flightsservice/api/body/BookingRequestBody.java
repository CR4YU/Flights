package com.example.flightsservice.api.body;


import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Arrays;

@Data
public class BookingRequestBody {

    @NotEmpty
    private String user;

    @NotNull
    private long flightId;

    @NotEmpty
    private String[] seats;

    @Pattern(regexp = "(\\d{1,2}[a-zA-Z],)*(\\d{1,2}[a-zA-Z])")
    public String getSeatsComaSeparated() {
        return Arrays.asList(seats).toString().replaceAll("\\[|\\]|[ ]","");
    }
}
