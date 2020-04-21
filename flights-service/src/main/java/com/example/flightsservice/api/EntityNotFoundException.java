package com.example.flightsservice.api;

public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException(Long id) {
        super("Resource not found: " + id);
    }

    public EntityNotFoundException(String id) {
        super("Resource not found: " + id);
    }

    public EntityNotFoundException(String resource, Long id) {
        super("Resource[" + resource + "] not found: " + id);
    }

    public EntityNotFoundException(String resource, String id) {
        super("Resource[" + resource + "] not found: " + id);
    }
}
