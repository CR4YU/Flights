package com.example.flightsservice.service;

import com.example.flightsservice.api.EntityNotFoundException;
import com.example.flightsservice.entity.User;
import com.example.flightsservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User findByLogin(String login) {
        return Optional.ofNullable(userRepository.findByLogin(login)).orElseThrow(() -> new EntityNotFoundException("User", login));
    }
}
