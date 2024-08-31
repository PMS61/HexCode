import React from "react";
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

  return (
    <>
      <section id="hero">
        <div className="absolute right-3 top-20 flex flex-col gap-5 justify-center items-center">
          <img src="Emblem-of-India-01 1.svg" width="30%" />
          <h2
            className="text-white font-black text-2xl"
            style={{ fontFamily: "Inter" }}
          >
            Ministry of Housing and Urban Affairs
          </h2>
          <h3
            className="text-white font-bold text-2xl"
            style={{ fontFamily: "Inter" }}
          >
            Smart Cities Mission
          </h3>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center bg-slate-100">
        <div className="my-10 text-center w-3/4 flex flex-col gap-4">
          <h1
            className="font-medium text-3xl"
            style={{ fontFamily: "Poppins" }}
          >
            What is{" "}
            <span className="font-bold" style={{ color: "#1237E4" }}>
              UrbanConnect
            </span>
          </h1>
          <h3
            className="text-xl font-base"
            style={{ fontFamily: "Montserrat" }}
          >
            UrbanConnect is a comprehensive digital platform designed to enhance
            interdepartmental cooperation and streamline the urban governance
            processes.
          </h3>
        </div>
        <div className="mb-10 h-1 w-40 bg-red-400 border"></div>
      </section>

      <section className="my-16 flex flex-col justify-center items-center">
        <div className=" text-center w-full flex flex-col gap-4 justify-center items-center">
          <h1
            className="font-medium text-3xl"
            style={{ fontFamily: "Poppins" }}
          >
            Need of UrbanConnect
          </h1>

          <div className="mt-4 flex w-3/4 gap-10">
            <div
              className="w-1/3 h-96 p-8 flex flex-col gap-10 rounded-lg hover:shadow-xl hover:transition-all"
              style={{
                backgroundColor: "#B5C2FF",
                border: "1px solid #5C5C5C",
              }}
            >
              <div style={{ height: "25%" }}>
                <h1
                  className="font-bold"
                  style={{ fontSize: "1.35rem", fontFamily: "Poppins" }}
                >
                  Underutilization of Resources
                </h1>
              </div>
              <div className="h-0.5 w-full bg-slate-400 "></div>
              <p
                className="text-justify tracking-wide"
                style={{ fontFamily: "Poppins" }}
              >
                Due to the overlapping jurisdictions and responsibilities,
                resources available with various departments are often
                underutilized, resulting in wastage and inefficiency
              </p>
            </div>

            <div
              className="w-1/3 h-96 p-8 flex flex-col gap-10 rounded-lg hover:shadow-xl hover:transition-all"
              style={{
                backgroundColor: "#9FFFCB",
                border: "1px solid #5C5C5C",
              }}
            >
              <div style={{ height: "25%" }}>
                <h1
                  className="font-bold"
                  style={{ fontSize: "1.35rem", fontFamily: "Poppins" }}
                >
                  Miscoordination and Delays
                </h1>
              </div>
              <div className="h-0.5 w-full bg-slate-400 "></div>
              <p
                className="text-justify tracking-wide"
                style={{ fontFamily: "Poppins" }}
              >
                Execution of multiple projects at the same site by different
                agencies lead to interference, miscoordination, and delays
              </p>
            </div>

            <div
              className="w-1/3 h-96 p-8 flex flex-col gap-10 rounded-lg hover:shadow-xl hover:transition-all"
              style={{
                backgroundColor: "#B5C2FF",
                border: "1px solid #5C5C5C",
              }}
            >
              <div style={{ height: "25%" }}>
                <h1
                  className="font-bold"
                  style={{ fontSize: "1.20rem", fontFamily: "Poppins" }}
                >
                  Multiplicity of Authorities and Implementing Agencies
                </h1>
              </div>
              <div className="h-0.5 w-full bg-slate-400 "></div>
              <p
                className="text-justify tracking-wide"
                style={{ fontFamily: "Poppins" }}
              >
                The presence of multiple authorities and implementing agencies
                in Indian urban areas creates governance challenges, leading to
                inefficiencies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-10 w-full flex justify-around items-center"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <div className="w-1/3">
          <div className="w-96">
            <Pie data={data} options={options}></Pie>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-14">
          <h1
            className="text-center font-semibold text-2xl"
            style={{ fontFamily: "Poppins" }}
          >
            Statistics
          </h1>
          <h2
            className="font-base text-justify text-lg"
            style={{ fontFamily: "Poppins" }}
          >
            According to estimates, Mumbai's{" "}
            <span className="font-bold">
              Brihanmumbai Municipal Corporation
            </span>
            (BMC) spends around{" "}
            <span className="font-bold">₹1,000-₹1,500 crores</span> annually on
            road repairs and maintenance. Of this, approximately 20-30% is
            believed to be wasted due to rework caused by lack of coordination
            with other utility departments (about{" "}
            <span className="font-bold">₹200-₹450 crores</span>).
          </h2>
        </div>
      </section>

      <section className="my-14 flex flex-col justify-center items-center">
        <h1 className="font-medium text-3xl" style={{ fontFamily: "Poppins" }}>
          Features
        </h1>
        <div
          className="mt-8 grid grid-cols-12 grid-rows-2 rounded-md"
          style={{ backgroundColor: "#EBEBEB", width: "85%" }}
        >
          <div
            className="p-5 flex flex-col gap-3 text-center justify-center items-center"
            style={{ gridColumn: "span 4" }}
          >
            <img src="share-icon.svg" alt="" style={{ width: "30%" }} />
            <p
              className="text-sm font-normal"
              style={{ fontFamily: "Poppins" }}
            >
              Exchange of data & resources and list of ongoing and upcoming
              projects between various agencies
            </p>
          </div>
          <div
            className="p-5 flex flex-col gap-3 text-center justify-center items-center"
            style={{ gridColumn: "span 4" }}
          >
            <img src="calendar-icon.png" alt="" style={{ width: "30%" }} />
            <p
              className="text-sm font-normal"
              style={{ fontFamily: "Poppins" }}
            >
              {" "}
              Scheduling of tasks, reports, and work distribution between
              agencies for projects categorized as "Inter-departmental"
            </p>
          </div>
          <div
            className="p-5 flex flex-col gap-3 text-center justify-center items-center"
            style={{ gridColumn: "span 4" }}
          >
            <img src="location-icon.svg" alt="" style={{ width: "30%" }} />
            <p
              className="text-sm font-normal"
              style={{ fontFamily: "Poppins" }}
            >
              {" "}
              Identification of projects in different departments which share
              the project site, to reduce costs incurred during planning and
              execution of projects
            </p>
          </div>
          <div
            className="p-5 flex flex-col gap-3 text-center justify-center items-center"
            style={{ gridColumn: "3 /span 4" }}
          >
            <img src="seminar-icon.png" alt="" style={{ width: "30%" }} />
            <p
              className="text-sm font-normal"
              style={{ fontFamily: "Poppins" }}
            >
              Training and capacity building exercises, workshops & seminars
            </p>
          </div>
          <div
            className="p-5 flex flex-col gap-3 text-center justify-center items-center"
            style={{ gridColumn: "7 /span 4" }}
          >
            <img src="forum-icon.png" alt="" style={{ width: "30%" }} />
            <p
              className="text-sm font-normal"
              style={{ fontFamily: "Poppins" }}
            >
              Discussion forum with Intra department, inter department, and
              public form sections
            </p>
          </div>
        </div>
      </section>

      <Link to="/signup">
        <div className="flex justify-center items-center my-4">
          <button className="w-80 flex text-white bg-slate-900 justify-center items-center gap-3 hover:bg-slate-950">
            Onboard your Department now <img src="arrow.svg" width="10%" />
          </button>
        </div>
      </Link>
      <section
        className="text-center py-2 text-sm text-white w-full bg-slate-800"
        style={{ fontFamily: "Poppins" }}
      >
        © UrbanConnect 2024
      </section>
    </>
  );
};
