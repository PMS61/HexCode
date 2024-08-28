import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Scheduler = () => {
  const [date, setDate] = useState(new Date());
  const [time, changeTime] = useState("10:00");

  return (
    <div>
      <div className="w-full gap-10 flex bg-slate-100 py-8 px-20 rounded-lg border shadow-sm">
        <div className="w-3/4 ">
          <h3
            style={{ "font-family": "Montserrat" }}
            className="font-bold text-2xl"
          >
            Schedule a Meeting
          </h3>
          <p
            style={{ "font-family": "Montserrat", "fontWeight": "400" }}
            className="font-light text-slate-500"
          >
            Fill the form below to schedule a new meeting
          </p>
          <div
            style={{ "font-family": "Poppins" }}
            className="flex flex-col gap-4 my-8 font-semibold tracking-wide text-base"
          >
            <label className="mb-3">
              Meeting Topic <br />{" "}
              <input
                className="w-full font-normal tracking-wider px-4 py-1 rounded-md mt-2"
                placeholder="Enter meeting topic"
                name="meeting-topic"
              ></input>
            </label>
            <div className="flex items-center justify-between">
              <label>
                Date
                <DatePicker
                  className="mx-4"
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
              </label>
              <label>
                Time
                <TimePicker
                  className="mx-4"
                  onChange={changeTime}
                  value={time}
                />
              </label>
            </div>
            <label>
              Location <br />
              <input
                className="w-full font-normal tracking-wider px-4 py-1 rounded-md mt-2"
                placeholder="Enter meeting location"
                name="meeting-location"
              ></input>
            </label>
          </div>
          {/* <div className="w-full bg-red-300"> */}
          <button className="bg-slate-700 rounded-md ml-auto block px-5 py-2 text-white font-bold hover:bg-slate-900">
            Schedule Meeting
          </button>
          {/* </div> */}
        </div>
        <div className="w-1/4  flex border-red-400 items-center justify-center">
        <div>
            <h3 className="font-semibold text-base text-center mb-3 text-slate-600">Already booked meetings</h3>
          <Calendar calendarType="gregory" className="calender-body" />
          </div>
        </div>
      </div>
    </div>
  );
};
