package com.example.hclproject.service;

import org.springframework.stereotype.Service;

import com.example.hclproject.model.User;
import com.example.hclproject.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User register(User user) {
        return repository.save(user);
    }

    public User login(String email, String password) {
        User user = repository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}