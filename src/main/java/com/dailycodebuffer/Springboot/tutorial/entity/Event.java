package com.dailycodebuffer.Springboot.tutorial.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;


@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

/*@Table(
        name = "event_Table"
        /*schema = "mydbname",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "dept_code_unique",
                        columnNames = "departmentCode"
                ),
                @UniqueConstraint(
                        name = "dept_mail_unique",
                        columnNames = "departmentEmail"
                )
        }
)*/

@Entity
@Table(name = "event")
public class Event {
    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getEventLocation() {
        return eventLocation;
    }

    public void setEventLocation(String eventLocation) {
        this.eventLocation = eventLocation;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public String getCreatorStudentID() {
        return creatorStudentID;
    }

    public void setCreatorStudentID(String creatorStudentID) {
        this.creatorStudentID = creatorStudentID;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;

    private String eventName;

    @JsonFormat(pattern = "dd-MM-yyyy", timezone = "UTC")
    private Date date;

    private String eventLocation;
    private String organization;
    private String creatorStudentID;

}
