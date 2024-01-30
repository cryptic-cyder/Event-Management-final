"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Page = () => {
  const [show, setShow] = useState(false);
  const [updatedEventName, setUpdatedEventName] = useState("");
  const [eventd, setEvent] = useState({
    eventName: "",
    date: "",
    eventLocation: "",
    organization: "",
    eventDescription: "",
    creatorStudentID: "",
  });
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.BACKEND_URL}/allEvent`);
        setEvents(response.data); // Set events with the data from the response
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, [updatedEventName]);
  const handleDelete = async (eventName, event) => {
    console.log(eventName);
    const respone = await axios.delete(
      `${process.env.BACKEND_URL}/event/${eventName}`,
      { data:event }
    );
    alert(respone.data);
  };
  const handleUpdate = async () => {
    const respone = await axios.put(
      `${process.env.BACKEND_URL}/event/${updatedEventName}`,
      eventd,
      { withCredentials: false }
    );
    alert(respone.data);
  };
  return (
    <div>
      {show ? (
        <div>
          <div className="content">
            <div className="container">
              <div className="col-md-6 col-md-offset-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdate();
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="eventId">Event ID:</label>
                    <input
                      type="text"
                      name="eventId"
                      value={eventd.eventId}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventName">Event Name:</label>
                    <input
                      type="text"
                      name="eventName"
                      value={eventd.eventName}
                      onChange={(e) =>
                        setEvent({ ...eventd, eventName: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                      type="date"
                      name="date"
                      value={eventd.date}
                      onChange={(e) =>
                        setEvent({ ...eventd, date: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventLocation">Event Location:</label>
                    <input
                      type="text"
                      name="eventLocation"
                      value={eventd.eventLocation}
                      onChange={(e) =>
                        setEvent({ ...eventd, eventLocation: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">Organization:</label>
                    <input
                      type="text"
                      name="organization"
                      value={eventd.organization}
                      onChange={(e) =>
                        setEvent({ ...eventd, organization: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="creatorStudentID">
                      Creator Student ID:
                    </label>
                    <input
                      type="text"
                      name="creatorStudentID"
                      className="form-control"
                      value={eventd.creatorStudentID}
                      onChange={(e) =>
                        setEvent({
                          ...eventd,
                          creatorStudentID: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDescription">Event Description:</label>
                    <input
                      type="text"
                      name="eventDescription"
                      value={eventd.eventDescription}
                      onChange={(e) =>
                        setEvent({
                          ...eventd,
                          eventDescription: e.target.value,
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-default">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="content">
        <div className="container">
          {/* Placeholder for a success or error message */}
          <p>Message goes here</p>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Event Location</th>
                <th>Organization</th>
                <th>Event Description</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, id) => (
                <tr key={id}>
                  <td>{event.eventId}</td>
                  <td>{event.eventName}</td>
                  <td>{event.date}</td>
                  <td>{event.eventLocation}</td>
                  <td>{event.organization}</td>
                  <td>{event.eventDescription}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(event.eventName, event)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setEvent(event);
                        setShow(!show);
                        setUpdatedEventName(event.eventName);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/createnewevent">
          <button>Create Event</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
