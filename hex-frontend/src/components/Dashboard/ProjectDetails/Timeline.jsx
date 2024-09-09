import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Set the app element for accessibility
Modal.setAppElement('#root');

// Main Timeline component
export default function Timeline({ startDateProp, endDateProp }) {
  const [timelineData, setTimelineData] = useState([
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [type, setType] = useState("work");
  const [currentIndex, setCurrentIndex] = useState(null); // Index of the node to add a new event next to

  // Parse startDate and endDate props
  const parsedStartDate = startDateProp ? new Date(startDateProp) : new Date();
  const parsedEndDate = endDateProp ? new Date(endDateProp) : new Date();

  const [startDate] = useState(parsedStartDate);
  const [endDate] = useState(parsedEndDate);

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
    if (date && currentIndex !== null) { // Ensure date is selected and currentIndex is set
      const newEvent = { title, subtitle, description, date: date.toLocaleDateString('en-GB'), type };
      const updatedTimelineData = [
        ...timelineData.slice(0, currentIndex + 1), // Events before the current index
        newEvent, // New event
        ...timelineData.slice(currentIndex + 1) // Events after the current index
      ];
      setTimelineData(updatedTimelineData);
      setTitle("");
      setSubtitle("");
      setDescription("");
      setDate(null);
      setType("work");
      setCurrentIndex(null);
      setIsModalOpen(false);
    }
  };

  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <VerticalTimeline lineColor="#000">
        {/* Fixed "Start" node */}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          date={startDate.toLocaleDateString('en-GB')}
          contentStyle={{ background: "rgb(16, 204, 82)", color: "#000" }}
          icon={<button className="add-event-button" onClick={() => handleOpenModal(-1)}>+</button>}
        >
          <h3 className="vertical-timeline-element-title">Start</h3>
        </VerticalTimelineElement>

        {/* Dynamic timeline elements */}
        {timelineData.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${event.type}`}
            contentStyle={{ 
              background: event.type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)", 
              color: "#000"
            }}
            contentArrowStyle={{ borderRight: `7px solid ${event.type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)"}` }}
            date={event.date}
            iconStyle={{ background: event.type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)", color: "#fff" }}
            icon={<button className="add-event-button" onClick={() => handleOpenModal(index)}>+</button>}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{event.subtitle}</h4>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}

        {/* Fixed "End" node */}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          date={endDate.toLocaleDateString('en-GB')}
          contentStyle={{ background: "rgb(16, 204, 82)", color: "#000" }}
          icon={<></>}
        >
          <h3 className="vertical-timeline-element-title">End</h3>
        </VerticalTimelineElement>
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
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
        />
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="work">Work</option>
          <option value="education">Education</option>
        </select>
        <button className="modal-button" onClick={handleAddEvent}>Save</button>
        <button className="modal-button cancel-button" onClick={() => setIsModalOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
}
