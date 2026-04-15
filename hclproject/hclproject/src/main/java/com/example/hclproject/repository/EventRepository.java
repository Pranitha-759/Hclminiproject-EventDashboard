package com.example.hclproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hclproject.model.Event;

public interface EventRepository extends JpaRepository<Event, Long>{

}