package com.example.hclproject.controller;

import org.springframework.web.bind.annotation.*;

import com.example.hclproject.model.User;
import com.example.hclproject.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public Object login(@RequestBody User user) {
        User dbUser = service.login(user.getEmail(), user.getPassword());

        if (dbUser == null) {
            return "Invalid email or password";
        }

        return dbUser;
    }
}