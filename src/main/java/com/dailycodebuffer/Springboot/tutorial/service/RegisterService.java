package com.dailycodebuffer.Springboot.tutorial.service;

import com.dailycodebuffer.Springboot.tutorial.entity.Event;
import com.dailycodebuffer.Springboot.tutorial.entity.Feedback;
import com.dailycodebuffer.Springboot.tutorial.entity.Register;
import com.dailycodebuffer.Springboot.tutorial.repository.EventRepoInterface;
import com.dailycodebuffer.Springboot.tutorial.repository.FeedbackRepoInterface;
import com.dailycodebuffer.Springboot.tutorial.repository.RegRepoInterface;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class RegisterService {

    @Autowired
    private RegRepoInterface regRepoInterface;

    public Register create(Register regJsonBody) {
        Register singleRecord = regRepoInterface.save(regJsonBody);
        return singleRecord;
    }

    public Register getRecord(String emailFromLogIn){
        return regRepoInterface.getReferenceByEmail(emailFromLogIn);
    }

    public List<Register> registeredUsers(){
        return regRepoInterface.findAll();
    }

    public boolean doesStudentIdExist(String studentId) {
        return regRepoInterface.existsByStudentId(studentId);
    }


    @Autowired
    private EventRepoInterface eventRepoInterface;

    public Event createEvent(Event event){
        return eventRepoInterface.save(event);
    }

    public List<Event> currentlyAvailableAllEvent(){
        return eventRepoInterface.findAll();
    }

    public Optional<Event> findEventByName(String eventName) {
        return eventRepoInterface.findByEventName(eventName);
    }

    public Event updateEventByName(String eventName, Event updatedEvent) {
        Optional<Event> existingEventOptional = eventRepoInterface.findByEventName(eventName);

        if (existingEventOptional.isPresent()) {
            Event existingEvent = existingEventOptional.get();

            // Copy non-null properties from updatedEvent to existingEvent
            BeanUtils.copyProperties(updatedEvent, existingEvent, "eventId");

            // Save the updated event
            return eventRepoInterface.save(existingEvent);
        } else {
            // Handle the case when the event with the given name is not found
            // You can throw an exception, return a default value, or handle it as needed
            return null;
        }
    }

    public void deleteEventByName(String eventName) {
        Optional<Event> existingEventOptional = findEventByName(eventName);
        Event existingEvent = existingEventOptional.orElse(null);
        eventRepoInterface.delete(existingEvent);
    }

    @Autowired
    private FeedbackRepoInterface feedbackRepoInterface;

    public Feedback createFeedback(Feedback feedback){
        return feedbackRepoInterface.save(feedback);
    }

    public Optional<Feedback> getFeedbackByName(String name) {
        return feedbackRepoInterface.findByName(name);
    }

    public Feedback updateFeedback(Feedback existingFeedback, Feedback updatedFeedback) {

        existingFeedback.setName(updatedFeedback.getName());
        existingFeedback.setFeedbackerStudentId(updatedFeedback.getFeedbackerStudentId());
        existingFeedback.setFeedback(updatedFeedback.getFeedback());

        // Save the updated feedback to the database
        return feedbackRepoInterface.save(existingFeedback);

    }
    public void deleteFeedback(Feedback existingOne) {

        feedbackRepoInterface.delete(existingOne);
    }

}
