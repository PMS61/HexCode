import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Sidebar from "./Sidebar"; // Ensure this path is correct

export const Scheduler = () => {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("10");
  const [minute, setMinute] = useState("00");
  const [topic, setTopic] = useState("");
  const [location, setLocation] = useState("");
  const [meetings, setMeetings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Load meetings from local storage when component mounts
    const savedMeetings = JSON.parse(localStorage.getItem("meetings")) || [];
    setMeetings(savedMeetings);
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside of it
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScheduleMeeting = () => {
    const newMeeting = {
      topic,
      date: date.toDateString(), // Store date as a string for easier comparison
      time: `${hour}:${minute}`,
      location,
    };

    // Add new meeting to the list
    const updatedMeetings = [...meetings, newMeeting];
    setMeetings(updatedMeetings);

    // Save meetings to local storage
    localStorage.setItem("meetings", JSON.stringify(updatedMeetings));

    // Clear form fields
    setTopic("");
    setLocation("");
    setDate(new Date());
    setHour("10");
    setMinute("00");
  };

  const handleDeleteMeeting = (index) => {
    const updatedMeetings = meetings.filter((_, i) => i !== index);
    setMeetings(updatedMeetings);
    localStorage.setItem("meetings", JSON.stringify(updatedMeetings));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date.toDateString());
    setDropdownVisible(true);
  };

  return (
    <div className=" min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 ml-0 sm:ml-64 p-4 pt-24">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: "Montserrat" }}>
            Schedule a Meeting
          </h3>
          <p className="font-light text-slate-500 mb-6" style={{ fontFamily: "Montserrat", fontWeight: "400" }}>
            Fill the form below to schedule a new meeting
          </p>
          <div className="flex flex-col gap-6">
            <label className="block mb-4">
              Meeting Topic
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-300 mt-2"
                placeholder="Enter meeting topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </label>
            <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-6">
              <label className="flex flex-col md:w-1/2 mb-4 md:mb-0">
                Date
                <DatePicker
                  className="mt-2 border border-gray-300 rounded-md p-2"
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
              </label>
              <div className="flex flex-col md:w-1/2">
                Time
                <div className="flex mt-2 border border-gray-300 rounded-md">
                  <select
                    className="w-1/2 px-4 py-2 border-r border-gray-300"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                  >
                    {[...Array(24).keys()].map(h => (
                      <option key={h} value={String(h).padStart(2, '0')}>{String(h).padStart(2, '0')}</option>
                    ))}
                  </select>
                  <select
                    className="w-1/2 px-4 py-2"
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
                  >
                    {[...Array(60).keys()].map(m => (
                      <option key={m} value={String(m).padStart(2, '0')}>{String(m).padStart(2, '0')}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <label className="block mb-4">
              Location
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-300 mt-2"
                placeholder="Enter meeting location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <button
              onClick={handleScheduleMeeting}
              className="bg-slate-700 text-white font-bold px-5 py-2 rounded-md hover:bg-slate-900"
            >
              Schedule Meeting
            </button>
          </div>
          <div className="mt-8">
            <h4 className="font-semibold text-xl mb-2">Scheduled Meetings</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Topic</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">Time</th>
                    <th className="border border-gray-300 px-4 py-2">Location</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {meetings.map((meeting, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{meeting.topic}</td>
                      <td className="border border-gray-300 px-4 py-2">{meeting.date}</td>
                      <td className="border border-gray-300 px-4 py-2">{meeting.time}</td>
                      <td className="border border-gray-300 px-4 py-2">{meeting.location}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => handleDeleteMeeting(index)}
                          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <aside className="w-full md:w-1/4 p-4 md:pt-24 bg-white border-t md:border-t-0 md:border-l border-gray-200">
        <h3 className="font-semibold text-base text-center mb-3 text-slate-600">
          Calendar
        </h3>
        <div className="relative">
          <Calendar
            calendarType="gregory"
            className="border border-gray-300 rounded-md"
            onClickDay={handleDateClick}
            tileContent={({ date }) => {
              const dateMeetings = meetings.filter(
                (meeting) => new Date(meeting.date).toDateString() === date.toDateString()
              );

              return (
                <div>
                  {dateMeetings.length > 0 && (
                    <button
                      className="bg-blue-500 text-white rounded p-1 text-xs"
                      onClick={() => handleDateClick(date)}
                    >
                      {dateMeetings.length}
                    </button>
                  )}
                </div>
              );
            }}
          />
          {dropdownVisible && selectedDate && (
            <div
              ref={dropdownRef}
              className="absolute top-0 left-0 mt-10 bg-white border border-gray-300 rounded-md shadow-lg p-4"
            >
              <h4 className="font-semibold text-lg mb-2">Meetings on {selectedDate}</h4>
              <ul>
                {meetings.filter(meeting => new Date(meeting.date).toDateString() === selectedDate).map((meeting, index) => (
                  <li key={index} className="mb-2">
                    <div>{meeting.topic} at {meeting.time}</div>
                    <div>{meeting.location}</div>
                    <button
                      onClick={() => handleDeleteMeeting(
                        meetings.findIndex(m => m === meeting)
                      )}
                      className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-800 mt-1"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setDropdownVisible(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded mt-2"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Scheduler;
