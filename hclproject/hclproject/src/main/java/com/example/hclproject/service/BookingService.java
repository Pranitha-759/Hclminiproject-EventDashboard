package com.example.hclproject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.hclproject.model.Booking;
import com.example.hclproject.repository.BookingRepository;

@Service
public class BookingService {

    private final BookingRepository repo;

    public BookingService(BookingRepository repo) {
        this.repo = repo;
    }

    public Booking bookEvent(Booking booking) {
        return repo.save(booking);
    }

    public List<Booking> getAllBookings(){
        return repo.findAll();
    }
}