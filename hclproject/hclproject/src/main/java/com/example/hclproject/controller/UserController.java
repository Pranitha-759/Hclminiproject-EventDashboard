package com.example.hclproject.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.hclproject.model.User;
import com.example.hclproject.repository.UserRepository;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    // GET ALL USERS
    @GetMapping
    public List<User> getAllUsers(){

        return repository.findAll();

    }

}