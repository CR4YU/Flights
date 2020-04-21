package com.example.flightsservice.api;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


import javax.servlet.http.HttpServletResponse;
import javax.validation.ConstraintViolationException;
import java.io.IOException;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static  org.springframework.http.HttpStatus.NOT_FOUND;


@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ApiError> handleEntityNotFound(Exception ex) {
        ApiError apiError = ApiError.withStatus(NOT_FOUND);
        apiError.setMessage("Entity not found");
        apiError.setErrorDetails(ex.getMessage());

        return new ResponseEntity<>(apiError, NOT_FOUND);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ApiError> constraintViolationException(ConstraintViolationException ex) {
        ApiError apiError = ApiError.withStatus(BAD_REQUEST);
        apiError.setMessage("Validation failed");
        apiError.setErrorDetails(ex.getConstraintViolations().toString());

        return new ResponseEntity<>(apiError, NOT_FOUND);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid
    (MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {

        ApiError apiError = ApiError.withStatus(BAD_REQUEST);
        apiError.setMessage("Validation failed");

        //Get all fields errors
        List<String> errors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(x -> x.getField() + ": " + x.getDefaultMessage())
                .collect(Collectors.toList());

        apiError.setErrorDetails(errors.toString());

        return new ResponseEntity<>(apiError, status);

    }
}
