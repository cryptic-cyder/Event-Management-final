package com.dailycodebuffer.Springboot.tutorial.repository;

import com.dailycodebuffer.Springboot.tutorial.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.Optional;

public interface EventRepoInterface extends JpaRepository<Event, Long> {
    Optional<Event> findByEventName(String eventName);

}
