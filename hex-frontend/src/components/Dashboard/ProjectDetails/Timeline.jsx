import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

// Main Timeline component
export default function Timeline() {
  const [timelineData, setTimelineData] = useState([
    // Initial timeline data
    {
      type: "work",
      date: "2011 - present",
      title: "Creative Director",
      subtitle: "Miami, FL",
      description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    // Add other initial events here
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("work"); // Can be 'work' or 'education'

  // Load timeline data from localStorage on component mount
  useEffect(() => {
    const savedTimelineData = localStorage.getItem("timelineData");
    if (savedTimelineData) {
      setTimelineData(JSON.parse(savedTimelineData));
    }
  }, []);

  // Save timeline data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("timelineData", JSON.stringify(timelineData));
  }, [timelineData]);

  const handleAddEvent = () => {
    setTimelineData([...timelineData, { title, subtitle, description, date, type }]);
    setTitle("");
    setSubtitle("");
    setDescription("");
    setDate("");
    setType("work");
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>React Vertical Timeline</h1>
      <div className="empty">Empty Container</div>
      <button onClick={() => setIsModalOpen(true)}>Add Event</button>
      <VerticalTimeline lineColor="#000"> {/* Set line color to black */}
        {timelineData.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${event.type}`}
            contentStyle={{ 
              background: event.type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)", 
              color: "#000" // Set text color to black
            }}
            contentArrowStyle={{ borderRight: `7px solid ${event.type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)"}` }}
            date={event.date}
            iconStyle={{ background: event.type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)", color: "#fff" }}
            icon={<></>}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{event.subtitle}</h4>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<></>}
        />
      </VerticalTimeline>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add New Event"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Add New Event</h2>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Subtitle:</label>
        <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Date:</label>
        <input value={date} onChange={(e) => setDate(e.target.value)} />
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="work">Work</option>
          <option value="education">Education</option>
        </select>
        <button onClick={handleAddEvent}>Save</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
}
