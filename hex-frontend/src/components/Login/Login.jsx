import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const apiURL = import.meta.env.EXPRESS_API_URL;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${apiURL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.authToken) {
      // save the auth token and redirect
      console.log("Login Success");
      localStorage.setItem("authToken", json.authToken);
      navigate("/dashboard");
    } else {
      console.log("Login Failed");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen w-screen" style={{backgroundImage: "url(login-bg.png)", backgroundSize: "cover"}}>
    <section className="text-gray-900 h-full flex justify-center items-center">
      <div className="flex flex-col items-center w-screen justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="bg-slate-200 w-full rounded-lg shadow border-gray-300 sm:max-w-md">
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Login
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    onChange={onChange}
                    value={credentials.email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    required
                    onChange={onChange}
                    value={credentials.password}
                  />
                </div>
                <div className="flex justify-center align-middle">
                  <button
                    type="submit"
                    className="btn w-36 md:btn-wide btn-primary mt-2 px-0 font-bold text-lg bg-[#57A2D8] hover:bg-[#2B80BD]" 
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet? {" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
