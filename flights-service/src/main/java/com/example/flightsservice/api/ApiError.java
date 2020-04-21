package com.example.flightsservice.api;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.http.HttpStatus;


import java.time.LocalDateTime;

@Data
public class ApiError {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime timestamp;
    private int status;
    private String message;
    private String errorDetails;

    private ApiError() { }

    public static ApiError withStatus(int status) {
        ApiError apiError = new ApiError();
        apiError.status = status;
        apiError.timestamp = LocalDateTime.now();
        return apiError;
    }

    public static ApiError withStatus(HttpStatus status) {
        return withStatus(status.value());
    }
}
