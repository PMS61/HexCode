import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Sidebar from "./Sidebar"; // Ensure this path is correct

export const Scheduler = () => {
  const [date, setDate] = useState(new Date());
  const [time, changeTime] = useState("10:00");

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64 p-4 pt-24">
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
                name="meeting-topic"
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
              <label className="flex flex-col md:w-1/2">
                Time
                <TimePicker
                  className="mt-2 border border-gray-300 rounded-md p-2"
                  onChange={changeTime}
                  value={time}
                />
              </label>
            </div>
            <label className="block mb-4">
              Location
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-300 mt-2"
                placeholder="Enter meeting location"
                name="meeting-location"
              />
            </label>
            <button className="bg-slate-700 text-white font-bold px-5 py-2 rounded-md hover:bg-slate-900">
              Schedule Meeting
            </button>
          </div>
        </div>
      </main>
      <aside className="w-full md:w-1/4 p-4 md:pt-24 bg-white border-t md:border-t-0 md:border-l border-gray-200">
        <h3 className="font-semibold text-base text-center mb-3 text-slate-600">
          Already booked meetings
        </h3>
        <Calendar
          calendarType="gregory"
          className="border border-gray-300 rounded-md"
        />
      </aside>
    </div>
  );
};

export default Scheduler;
