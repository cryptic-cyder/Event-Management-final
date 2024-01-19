package com.dailycodebuffer.Springboot.tutorial.controller;

import com.dailycodebuffer.Springboot.tutorial.entity.Event;
import com.dailycodebuffer.Springboot.tutorial.entity.Feedback;
import com.dailycodebuffer.Springboot.tutorial.entity.Register;
import com.dailycodebuffer.Springboot.tutorial.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class Controller {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/regPOST")
    public Register reg(@RequestBody Register regJsonBody){
        return  registerService.create(regJsonBody);
    }

    @PostMapping("/logPOST")
    public ResponseEntity<String> log(@RequestBody Register logJsonBody){

        String emailFromLogIn = logJsonBody.getEmail();
        String passwordFromLogIn = logJsonBody.getPassword();

        String passwordFromDB = registerService.getRecord(emailFromLogIn).getPassword();

        if (passwordFromLogIn.equals(passwordFromDB))
            return ResponseEntity.ok("Login successful!");
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Incorrect password");

    }

    @GetMapping("/registeredUsers")
    public List<Register> currentUser(){
        return registerService.registeredUsers();
    }


    //Event
    @PostMapping("/eventCREATE")
    public ResponseEntity<String> createEvent(@RequestBody Event event){

        if(registerService.doesStudentIdExist(event.getCreatorStudentID())){
            registerService.createEvent(event);
            return ResponseEntity.ok("Event Added");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Sorry you haven't any account");

    }

    @GetMapping("/allEvent")
    public List<Event> currentlyAllEvent(){
        return registerService.currentlyAvailableAllEvent();
    }

    @PutMapping("/event/{eventName}")
    public ResponseEntity<String> updateEventByName(@PathVariable String eventName, @RequestBody Event updatedEvent) {

        Optional<Event> existingEventOptional = registerService.findEventByName(eventName);
        Event existingEvent = existingEventOptional.orElse(null);

        if(registerService.doesStudentIdExist(updatedEvent.getCreatorStudentID()) &&
                existingEvent.getCreatorStudentID().equals(updatedEvent.getCreatorStudentID())){

            registerService.updateEventByName(eventName, updatedEvent);
            return ResponseEntity.ok("Record Updated successfully");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You haven't posted it or haven't any account");
    }

    @DeleteMapping("/event/{eventName}")
    public ResponseEntity<String> deleteEventByName(@PathVariable String eventName, @RequestBody Event deleteEvent) {
        Optional<Event> existingEventOptional = registerService.findEventByName(eventName);
        Event existingEvent = existingEventOptional.orElse(null);

        if(registerService.doesStudentIdExist(existingEvent.getCreatorStudentID()) &&
                existingEvent.getCreatorStudentID().equals(deleteEvent.getCreatorStudentID())){

            registerService.deleteEventByName(eventName);
            return ResponseEntity.ok("Successfully deleted");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You haven't posted it or haven't any account");
    }

    //Feedback
    @PostMapping("/createFeedback")
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedbackJsonBody){
        if(registerService.doesStudentIdExist(feedbackJsonBody.getFeedbackerStudentId())){
            registerService.createFeedback(feedbackJsonBody);
            return ResponseEntity.ok(feedbackJsonBody);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

    @PutMapping("/{feedback}/{feedbackerName}")
    public ResponseEntity<String> updateFeedbackByName(@PathVariable String feedbackerName, @RequestBody Feedback updatedFeedback) {

        Optional<Feedback> existingFeedbackOptional = registerService.getFeedbackByName(feedbackerName);
        Feedback existingFeedback = existingFeedbackOptional.orElse(null);
        //System.out.println(existingFeedback);
        if(registerService.doesStudentIdExist(updatedFeedback.getFeedbackerStudentId()) &&
                existingFeedback.getFeedbackerStudentId().equals(updatedFeedback.getFeedbackerStudentId())){

            registerService.updateFeedback(existingFeedback, updatedFeedback);
            return ResponseEntity.ok("Record Updated successfully");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You haven't posted it or haven't any account");
    }

    @DeleteMapping("/feedback/{nameToBeDeleted}")
    public ResponseEntity<String> deleteFeedback(@PathVariable String nameToBeDeleted,@RequestBody Feedback temp){
        Optional<Feedback> existingFeedbackOptional = registerService.getFeedbackByName(nameToBeDeleted);
        Feedback existingFeedback = existingFeedbackOptional.orElse(null);
        System.out.println(existingFeedback.getFeedbackerStudentId()+" "+temp);

        if(registerService.doesStudentIdExist(existingFeedback.getFeedbackerStudentId()) &&
                existingFeedback.getFeedbackerStudentId().equals(temp.getFeedbackerStudentId())){
            //System.out.println("Hello");
            registerService.deleteFeedback(existingFeedback);
            return ResponseEntity.ok("Record deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You haven't posted it or haven't any account");
    }

}
