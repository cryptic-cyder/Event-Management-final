package com.dailycodebuffer.Springboot.tutorial.entity;

import lombok.*;

import javax.persistence.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name = "feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFeedbackerStudentId() {
        return feedbackerStudentId;
    }

    public void setFeedbackerStudentId(String feedbackerStudentId) {
        this.feedbackerStudentId = feedbackerStudentId;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    private String name;
    private String feedbackerStudentId;

    @Lob
    private String feedback;
}
