package com.example.hclproject.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.hclproject.model.Booking;
import com.example.hclproject.service.BookingService;

@RestController
@RequestMapping("/booking")
@CrossOrigin("*")
public class BookingController {

    private final BookingService service;

    public BookingController(BookingService service) {
        this.service = service;
    }

    // POST booking
    @PostMapping
    public Booking book(@RequestBody Booking booking) {
        return service.bookEvent(booking);
    }

    // GET all bookings
    @GetMapping
    public List<Booking> getAllBookings(){
        return service.getAllBookings();
    }
}