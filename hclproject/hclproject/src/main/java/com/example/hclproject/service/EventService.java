package com.example.hclproject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hclproject.model.Event;
import com.example.hclproject.repository.EventRepository;

@Service
public class EventService {

    @Autowired
    private EventRepository repository;

    public Event createEvent(Event event) {
        return repository.save(event);
    }

    public List<Event> getAllEvents() {
        return repository.findAll();
    }

    public Event getEventById(Long id) {
        Optional<Event> event = repository.findById(id);
        return event.orElse(null);
    }

    public Event updateEvent(Long id, Event event) {
        event.setId(id);
        return repository.save(event);
    }

    public void deleteEvent(Long id) {
        repository.deleteById(id);
    }
}