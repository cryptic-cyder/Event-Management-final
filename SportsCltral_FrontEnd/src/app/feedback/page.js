"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [feed,setFeedback]= useState({
    name: "",
    feedbackerStudentId: "",
    feedback: "",
  });
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_URL}/allFeedback`
        );
        setFeedbackList(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, [feedbackList]);
  const [formData, setFormData] = useState({
    name: "",
    feedbackerStudentId: "",
    feedback: "",
  });
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `${process.env.BACKEND_URL}/{feedback}/${feed.name}`,feed
      );

      console.log("Feedback edited successfully:", response.data);

      // Update the feedback list after editing
      setFeedbackList((prevFeedbackList) =>
        prevFeedbackList.map((feedback) =>
          feedback.name === feed.feedbackerName ? { ...feedback, ...updatedData } : feedback
        )
      );
    } catch (error) {
      console.error("Error editing feedback:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/createFeedback`,
        formData
      );

      console.log("Feedback posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting feedback:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleDelete = async (name,feedback) => {
    try {
      console.log(feedback);
      const response = await axios.delete(
        `${process.env.BACKEND_URL}/feedback/${name}`,{data:feedback}
      );

      console.log("Feedback deleted successfully:", response.data);

      // Update the feedback list after deletion
      setFeedbackList((prevFeedbackList) =>
        prevFeedbackList.filter((feedback) => feedback.name !== name)
      );
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };
 
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="col-md-6 col-md-offset-3">
            {!show||feedbackList.length===0?<form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Name: </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="password">ID: </label>
                <input
                  type="text"
                  name="feedbackerStudentId"
                  className="form-control"
                  value={formData.feedbackerStudentId}
                  onChange={handleChange}
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="password">FeedBack: </label>
                <textarea
                  name="feedback"
                  className="form-control"
                  value={formData.feedback}
                  onChange={handleChange}
                />
                <span className="error"></span>
              </div>
              <button type="submit" className="btn btn-default">
                Post your feedback
              </button>
            </form>:
            <form onSubmit={(e)=>{e.preventDefault(); handleUpdate()}}>
              <div className="form-group">
                <label htmlFor="username">Name: </label>
                <input
                  type="text"
                  name="feedbackerName"
                  className="form-control"
                  value={feed.name}
                  onChange={(e) => setFeedback({ ...feed, name: e.target.value })}
                />
                <span className="error"></span>
              </div>
              
              <div className="form-group">
                <label htmlFor="password">FeedBack: </label>
                <textarea
                  name="feedback"
                  className="form-control"
                  value={feed.feedback}
                  onChange={(e) => setFeedback({ ...feed, feedback: e.target.value })}
                />
                <span className="error"></span>
              </div>
              <button type="submit" className="btn btn-default">
                Update
              </button>
            </form>}
            
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="feedback-section">
                    <h2>All Feedback</h2>
                    <ul className="list-group">
                      {feedbackList.map((feedback, index) => (
                        <li key={index} className="list-group-item">
                          <strong>Name:</strong> {feedback.name}
                          <br />
                          <strong>ID:</strong> {feedback.feedbackerStudentId}
                          <br />
                          <strong>Feedback:</strong> {feedback.feedback}
                          <br />
                          {/* Additional information as needed */}
                          <div
                            className="btn-group mt-2"
                            role="group"
                            aria-label="Feedback Actions"
                          >
                            <button type="button" className=" btn btn-warning " onClick={() => {setFeedback(feedback);setShow(!show)}}>
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger m-2"
                              onClick={() => handleDelete(feedback.name,feedback)}
                            >
                              Delete
                            </button>
                          </div>
                          <hr />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
