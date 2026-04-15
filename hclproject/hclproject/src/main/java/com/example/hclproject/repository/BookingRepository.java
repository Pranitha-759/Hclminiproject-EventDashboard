package com.example.hclproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hclproject.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}