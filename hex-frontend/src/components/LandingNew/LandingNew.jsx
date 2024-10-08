import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

export const LandingNew = () => {
  const data = {
    labels: ["Money actually used for Road repairs", "Money wasted"],
    datasets: [
      {
        data: [900, 350],
        backgroundColor: ["#E24D42", "#EAB839"],
      },
    ],
    hoverOffset: 4,
  };
  const options = {};

  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <header className="bg-[#3E3D3F] text-white py-4 ">
        <div className="flex justify-between items-center">
          <img src="assets/logo.png" alt="logo" className="mx-6" width="6%" />
          <nav className="hidden md:flex items-center gap-6 mr-10">
            {["Features", "Use Cases"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-500 text-lg" style={{fontFamily: "Poppins"}}
              >
                {item}
              </a>
            ))}
            <Link to="/login">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-md">
                Login
              </button>
            </Link>
          </nav>
          {/* Hamburger menu for mobile view */}
          <button
            className={`p-2 md:hidden ${navbarOpen ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            
            <div
              className={`w-6 h-0.5 bg-gray-500 transform transition-transform duration-300 ${
                navbarOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-gray-500 mt-1 transform transition-transform duration-300 ${
                navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
        {/* Mobile navigation */}
        <nav className={`md:hidden ${navbarOpen ? "block" : "hidden"} mt-4`}>
          
          {["Features", "Use Cases"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-lg py-2 hover:text-orange-500"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section id="hero" className="relative py-10 px-5 md:px-10">
        <div className="absolute right-0 top-20 flex flex-col gap-5 mr-16 justify-center items-center w-full md:w-auto">
          <img src="/assets/logo.png" alt="Logo" className="w-4/6 " />
          <h2 className="text-white font-bold text-4xl text-center">
            UrbanConnect
          </h2>
          <h3 className="text-white font-medium tracking-wide text-lg md:text-xl">
            Smart Cities Mission
          </h3>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center bg-slate-100 py-10 px-5">
        <div className="my-10 text-center w-full max-w-4xl flex flex-col gap-4">
          <h1
            className="font-medium text-2xl md:text-3xl"
            style={{ fontFamily: "Poppins" }}
          >
            What is{" "}
            <span className="font-bold" style={{ color: "#1237E4" }}>
              UrbanConnect
            </span>
          </h1>
          <h3
            className="text-lg md:text-xl font-base"
            style={{ fontFamily: "Montserrat" }}
          >
            UrbanConnect is a comprehensive digital platform designed to enhance
            interdepartmental cooperation and streamline the urban governance
            processes.
          </h3>
        </div>
        <div className="mb-10 h-1 w-24 md:w-40 bg-red-400 border mx-auto"></div>
      </section>

      <section className="my-16 flex flex-col justify-center items-center px-5" id="use%20cases">
        <div className="text-center w-full max-w-4xl flex flex-col gap-4">
          <h1
            className="font-medium text-2xl md:text-3xl"
            style={{ fontFamily: "Poppins" }}
          >
            Need of UrbanConnect
          </h1>

          <div className="mt-4 flex flex-col md:flex-row gap-6 md:gap-10">
            {[
              "Underutilization of Resources",
              "Miscoordination and Delays",
              "Multiplicity of Authorities and Implementing Agencies",
            ].map((title, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 h-auto p-6 flex flex-col gap-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  backgroundColor: index % 2 === 0 ? "#B5C2FF" : "#9FFFCB",
                  border: "1px solid #5C5C5C",
                }}
              >
                <div className="flex-grow h-1/4">
                  <h1
                    className="font-bold text-lg md:text-xl"
                    style={{ fontSize: "1.35rem" }}
                  >
                    {title}
                  </h1>
                </div>
                <div className="h-0.5 w-full bg-slate-400"></div>
                <p className="text-justify tracking-wide">
                  {index === 0
                    ? "Due to the overlapping jurisdictions and responsibilities, resources available with various departments are often underutilized, resulting in wastage and inefficiency."
                    : index === 1
                    ? "Execution of multiple projects at the same site by different agencies lead to interference, miscoordination, and delays."
                    : "The presence of multiple authorities and implementing agencies in Indian urban areas creates governance challenges, leading to inefficiencies."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-5 bg-gray-100 flex flex-col md:flex-row justify-around items-center">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-full md:w-3/  4 lg:w-2/3">
            <Pie data={data} options={options}></Pie>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <h1
            className="text-center font-semibold text-xl md:text-3xl"
            style={{ fontFamily: "Poppins" }}
          >
            Statistics
          </h1>
          <h2
            className="text-lg md:text-lg text-justify tracking-wide font-base"
            style={{ fontFamily: "Poppins" }}
          >
            According to estimates, Mumbai's{" "}
            <span className="font-bold">
              Brihanmumbai Municipal Corporation
            </span>{" "}
            (BMC) spends around{" "}
            <span className="font-bold">₹1,000-₹1,500 crores</span> annually on
            road repairs and maintenance. Of this, approximately 20-30% is
            believed to be wasted due to rework caused by lack of coordination
            with other utility departments (about{" "}
            <span className="font-bold">₹200-₹450 crores</span>).
          </h2>
        </div>
      </section>

      <section className="my-14 px-5" id="features">
        <h1
          className="text-center font-medium text-2xl md:text-3xl"
          style={{ fontFamily: "Poppins" }}
        >
          Features
        </h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              imgSrc: "share-icon.svg",
              text: "Exchange of data & resources and list of ongoing and upcoming projects between various agencies",
            },
            {
              imgSrc: "calendar-icon.png",
              text: "Scheduling of tasks, reports, and work distribution between agencies for projects categorized as 'Inter-departmental'",
            },
            {
              imgSrc: "location-icon.svg",
              text: "Identification of projects in different departments which share the project site, to reduce costs incurred during planning and execution of projects",
            },
            {
              imgSrc: "seminar-icon.png",
              text: "Training and capacity building exercises, workshops & seminars",
            },
            {
              imgSrc: "forum-icon.png",
              text: "Discussion forum with Intra department, inter department, and public form sections",
            },
            {
              imgSrc: "bell-icon.png",
              text: "Notification and Alert system delivers real-time updates, and critical alerts to users, ensuring they stay informed and can respond promptly to important events",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 text-center justify-center items-center p-5 bg-[#EBEBEB] rounded-md shadow-md"
            >
              <img src={feature.imgSrc} alt="" className="w-1/3 md:w-1/4" />
              <p
                className="text-sm font-normal"
                style={{ fontFamily: "Poppins" }}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Link to="/login">  
        <div className="flex justify-center items-center my-4 px-5">
          <button className="w-full md:w-80 flex text-white bg-slate-900 justify-center items-center gap-3 hover:bg-slate-950 py-3 px-6 text-sm rounded">
            Onboard your Department now
            <img src="arrow.svg" className="w-4 md:w-6" />
          </button>
        </div>
      </Link>

      <section
        className="text-center py-2 text-sm text-white bg-slate-800"
        style={{ fontFamily: "Poppins" }}
      >
        © UrbanConnect 2024
      </section>
    </>
  );
};
