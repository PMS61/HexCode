import React from "react";

export const LandingNew = () => {
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

      <section
        className="flex flex-col justify-center items-center"
      >
        <div className="mt-20 text-center w-full flex flex-col gap-4">
          <h1
            className="font-medium text-3xl"
            style={{ fontFamily: "Poppins" }}
          >
            Need of UrbanConnect
          </h1>

          <div className="mt-4 flex w-full">
            <div className="w-1/3 h-72 p-8 flex flex-col gap-10" style={{ backgroundColor: "#B5C2FF" }}>
            <div style={{height: "25%"}}>
              <h1 className="font-bold" style={{fontSize: "1.35rem", fontFamily: "Poppins"}}>Underutilization of Resources</h1>
              </div>
              <p className="text-justify" style={{fontFamily: "Poppins"}}>
                Due to the overlapping jurisdictions and responsibilities,
                resources available with various departments are often
                underutilized, resulting in wastage and inefficiency
              </p>
            </div>
            <div className="w-1/3 h-72 p-8 flex flex-col gap-10" style={{ backgroundColor: "#9FFFCB" }}>
            <div style={{height: "25%"}}>
              <h1 className="font-bold" style={{fontSize: "1.35rem", fontFamily: "Poppins"}}>Miscoordination and Delays</h1>
              </div>
              <p className="text-justify" style={{fontFamily: "Poppins"}}>
                Execution of multiple projects at the same site by different
                agencies lead to interference, miscoordination, and delays
              </p>
            </div>
            <div className="w-1/3 h-72 p-8 flex flex-col gap-10" style={{ backgroundColor: "#B5C2FF" }}>
            <div style={{height: "25%"}}>
              <h1 className="font-bold" style={{fontSize: "1.35rem", fontFamily: "Poppins"}}>Multiplicity of Authorities and Implementing Agencies</h1>
              </div>
              <p className="text-justify" style={{fontFamily: "Poppins"}}>
              The presence of multiple authorities and implementing agencies in Indian urban areas creates governance challenges, leading to inefficiencies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 w-full flex justify-around items-center" style={{backgroundColor: "#F2F2F2"}}>
        <div className="w-1/3"><img src="temp-graph.png" alt="" /></div>
        <div className="w-1/3 flex flex-col gap-14">
          <h1 className="text-center font-semibold text-2xl" style={{fontFamily: "Poppins"}}>Statistics</h1>
          <h2 className="font-base text-justify text-lg" style={{fontFamily: "Poppins"}}>According to estimates, Mumbai's Brihanmumbai Municipal Corporation (BMC) spends around ₹1,000-₹1,500 crores annually on road repairs and maintenance. Of this, approximately 20-30% is believed to be wasted due to rework caused by lack of coordination with other utility departments (about ₹200-₹450 crores).</h2>
        </div>
      </section>
    </>
  );
};
